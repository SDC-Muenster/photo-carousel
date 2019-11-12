const fs = require('fs');
const path = require('path');
const generateHomes = require('./generateHomes');

const writeHomesToCsv = () => (
  new Promise((res, _rej) => {
    const writeHomes = fs.createWriteStream(path.join(__dirname, 'newhomes.csv'));
    writeHomes.write('id,title,location,cost,rating,reviews,type,favorite,photos\n', 'utf8');

    const writeRecords = (writer, encoding, cb) => {
      let i = 10000;
      const write = () => {
        let ok = true;
        do {
          i -= 1;
          const data = generateHomes(1000);
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

    // console.time('10M');
    writeRecords(writeHomes, 'utf8', () => {
      writeHomes.end();
      // console.timeEnd('10M');
      res();
    });
  })
);

module.exports = writeHomesToCsv;
// time: 10 min
