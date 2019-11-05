const fs = require('fs');
const path = require('path');
const generateRelations = require('./generateHomeRelation');

const writeHomeRelationToCsv = () => (
  new Promise((res, _rej) => {
    const writeHomeRelation = fs.createWriteStream(path.join(__dirname, 'homeRelation.csv'));
    writeHomeRelation.write('id,primaryHomeId,secondaryHomeId\n', 'utf8');

    const writeRecords = (writer, encoding, cb) => {
      let i = 10000000;
      const write = () => {
        let ok = true;
        do {
          i -= 1;
          const data = generateRelations();
          if (i === 0) {
            writer.write(data, encoding, cb);
          } else {
            ok = writer.write(data, encoding);
          }
        } while (i > 0 && ok);
        if (i > 0) {
          writer.once('drain', write);
        }
      };
      write();
    };

    // console.time('100M');
    writeRecords(writeHomeRelation, 'utf8', () => {
      writeHomeRelation.end();
      // console.timeEnd('100M');
      res();
    });
  })
);

module.exports = writeHomeRelationToCsv;
// time: 82 seconds
