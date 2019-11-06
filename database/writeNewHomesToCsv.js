/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const generateNewHomes = require('./generateNewHomes');

const writeNewHomesToCsv = () => (
  new Promise((res, _rej) => {
    const writeHomes = fs.createWriteStream(path.join(__dirname, 'newhomes.csv'));
    writeHomes.write('id,title,location,cost,rating,reviews,type,favorite,similarHomesOne,similarHomesTwo,similarHomesThree,similarHomesFour,similarHomesFive,similarHomesSix,similarHomesSeven,similarHomesEight,similarHomesNine,similarHomesTen,photoOne,photoTwo,photoThree,photoFour,photoFive,photoSix,photoSeven,photoEight,photoNine,photoTen\n', 'utf8');

    const writeRecords = (writer, encoding, cb) => {
      let i = 10000;
      const write = () => {
        let ok = true;
        do {
          i -= 1;
          const data = generateNewHomes(1000);
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
      console.timeEnd('10M');
      res();
    });
  })
);

console.time('10M');
writeNewHomesToCsv();

module.exports = writeNewHomesToCsv;
// time: 10 min
