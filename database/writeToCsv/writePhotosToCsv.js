const fs = require('fs');
const path = require('path');
const Photo = require('./generatePhotos');

const writePhotosToCsv = () => (
  new Promise((res, _rej) => {
    const writePhotos = fs.createWriteStream(path.join(__dirname, 'photos.csv'));
    writePhotos.write('id,url,homeId\n', 'utf8');

    const writeRecords = (writer, encoding, cb) => {
      let i = 100000000;
      let id = 1;
      const write = () => {
        let ok = true;
        do {
          i -= 1;
          id += 1;
          const data = new Photo(id);
          if (i === 0) {
            writer.write(`${data.id},${data.url},${data.homeId}\n`, encoding, cb);
          } else {
            ok = writer.write(`${data.id},${data.url},${data.homeId}\n`, encoding);
          }
        } while (i > 0 && ok);
        if (i > 0) {
          writer.once('drain', write);
        }
      };
      write();
    };

    // console.time('100M');
    writeRecords(writePhotos, 'utf8', () => {
      writePhotos.end();
      // console.timeEnd('100M');
      res();
    });
  })
);

module.exports = writePhotosToCsv;
// time 3.5 min
