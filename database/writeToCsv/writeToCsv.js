/* eslint-disable no-console */
const writeHomesToCsv = require('./writeHomesToCsv');
const writeHomeRelationToCsv = require('./writeHomeRelationToCsv');
const writePhotosToCsv = require('./writePhotosToCsv');

const writeToCsv = async () => {
  await writeHomesToCsv();
  await writePhotosToCsv();
  await writeHomeRelationToCsv();
};

console.time('total');
writeToCsv()
  .then(() => console.timeEnd('total'));


module.exports = writeToCsv;

// time: ~11 min
