/* eslint-disable no-console */
const path = require('path');
const client = require('./index');

client
  .query('CREATE TABLE IF NOT EXISTS homes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL,rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, similarhomes text[] NOT NULL, photos text[] NOT NULL);')
  .then(() => console.log('table homes created'))
  .catch((err) => console.error('table homes creation error', err.stack));

const homesCsvPath = path.join(__dirname, 'homes.csv');

console.time('seed-10M-homes');
client
  .query(`COPY homes (id,title,location,cost,rating,reviews,type,favorite,similarhomes,photos) FROM '${homesCsvPath}' DELIMITER ',' CSV HEADER;`)
  .then((result) => {
    console.log('seeding homes success', result.rowCount);
    client.end();
    console.timeEnd('seed-10M-homes');
  })
  .catch((err) => console.error('seeding homes fail', err.stack));

// time: 5 min
