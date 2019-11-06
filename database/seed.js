/* eslint-disable no-console */
const client = require('./index');
const path = require('path');

client
  .connect()
  .then(() => console.log('postgres connected'))
  .catch((err) => console.error('postgres connection error', err.stack));

client
  .query('CREATE TABLE IF NOT EXISTS homes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL,rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, similarHomesOne integer NOT NULL, similarHomesTwo integer NOT NULL, similarHomesThree integer NOT NULL, similarHomesFour integer NOT NULL, similarHomesFive integer NOT NULL, similarHomesSix integer NOT NULL, similarHomesSeven integer NOT NULL, similarHomesEight integer NOT NULL, similarHomesNine integer NOT NULL, similarHomesTen integer NOT NULL, photoOne text NOT NULL, photoTwo text NOT NULL, photoThree text NOT NULL, photoFour text NOT NULL, photoFive text NOT NULL, photoSix text NOT NULL, photoSeven text NOT NULL, photoEight text NOT NULL, photoNine text NOT NULL, photoTen text NOT NULL);')
  .then(() => console.log('table homes created'))
  .catch((err) => console.error('table homes creation error', err.stack));

const homesCsvPath = path.join(__dirname, 'homes.csv');

console.time('seed-10M-homes');
client
  .query(`COPY homes (id,title,location,cost,rating,reviews,type,favorite,similarHomesOne,similarHomesTwo,similarHomesThree,similarHomesFour,similarHomesFive,similarHomesSix,similarHomesSeven,similarHomesEight,similarHomesNine,similarHomesTen,photoOne,photoTwo,photoThree,photoFour,photoFive,photoSix,photoSeven,photoEight,photoNine,photoTen) FROM '${homesCsvPath}' DELIMITER ',' CSV HEADER;`)
  .then((result) => {
    console.log('seeding homes success', result.rowCount);
    client.end();
    console.timeEnd('seed-10M-homes');
  })
  .catch((err) => console.error('seeding homes fail', err.stack));

// time: 184920.677ms (3 min)
