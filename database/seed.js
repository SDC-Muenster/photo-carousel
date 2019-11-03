/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('./index');
const data = require('./tenMillionHomes.json');

console.time('Insert records to DB');
db.HomeSet.insertMany(data)
  .then((_docs) => {
    console.timeEnd('Insert records to DB');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);
    mongoose.disconnect();
  });

// takes 99ms to insert 10 records
