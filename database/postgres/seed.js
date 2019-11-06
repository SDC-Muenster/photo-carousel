/* eslint-disable no-console */
const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'jenny',
  host: 'localhost',
  database: 'mydb',
  password: '',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('postgres connected'))
  .catch((err) => console.error('postgres connection error', err.stack));

client
  .query('CREATE TABLE IF NOT EXISTS newhomes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL, rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, similarHomesOne integer NOT NULL, similarHomesTwo integer NOT NULL, similarHomesThree integer NOT NULL, similarHomesFour integer NOT NULL, similarHomesFive integer NOT NULL, similarHomesSix integer NOT NULL, similarHomesSeven integer NOT NULL, similarHomesEight integer NOT NULL, similarHomesNine integer NOT NULL, similarHomesTen integer NOT NULL, photoOne text NOT NULL, photoTwo text NOT NULL, photoThree text NOT NULL, photoFour text NOT NULL, photoFive text NOT NULL, photoSix text NOT NULL, photoSeven text NOT NULL, photoEight text NOT NULL, photoNine text NOT NULL, photoTen text NOT NULL);')
  .then(() => console.log('table newhomes created'))
  .catch((err) => console.error('table newhomes creation error', err.stack));


const newHomesCsvPath = path.join(__dirname, '../writeToCsv/newhomes.csv');
console.log(newHomesCsvPath);

console.time('seed-10M-new-home');
client
  .query(`COPY newhomes (id, title, location, cost, rating, reviews, type, favorite, similarHomesOne, similarHomesTwo, similarHomesThree, similarHomesFour, similarHomesFive, similarHomesSix, similarHomesSeven, similarHomesEight, similarHomesNine, similarHomesTen, photoOne, photoTwo, photoThree, photoFour, photoFive, photoSix, photoSeven, photoEight, photoNine, photoTen) FROM '${newHomesCsvPath}' DELIMITER ',' CSV HEADER;`)
  .then((result) => {
    console.log('seeding homes success', result.rowCount);
    console.timeEnd('seed-10M-new-home');
  })
  .catch((err) => console.error('seeding homes fail', err.stack));
