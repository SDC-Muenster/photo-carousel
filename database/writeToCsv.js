const writeHomesToCsv = require('./writeHomesToCsv');
const writeHomeRelationToCsv = require('./writeHomeRelationToCsv');

const writeToCsv = async () => {
  await writeHomesToCsv();
  await writeHomeRelationToCsv();
};

writeToCsv();

// time: 11 ~12 min
