/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const generateHomes = require('./generateHomes'); // Took 22 minutes

const writeHomes = fs.createWriteStream(path.join(__dirname, 'tenMillionHomes.json'));
writeHomes.write('[', 'utf8');

const writeTenMillionHomes = (writer, encoding, cb) => {
  let i = 10000;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      let data = generateHomes(1000);
      if (i === 0) {
        data = data.slice(0, data.length - 2);
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

console.time('10M');
writeTenMillionHomes(writeHomes, 'utf8', () => {
  writeHomes.write(']', 'utf8');
  writeHomes.end();
  console.timeEnd('10M');
});
