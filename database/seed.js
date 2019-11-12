/* eslint-disable no-console */
const path = require('path');
const client = require('./index');

// create "newhomes" table
client
  .query('CREATE TABLE IF NOT EXISTS newhomes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL,rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, photos text[] NOT NULL);')
  .then(() => console.log('table homes created'))
  .catch((err) => console.error('table homes creation error', err.stack));

// copy data to "newhomes" table
const homesCsvPath = path.join(__dirname, 'newhomes.csv');
console.time('seed-10M-homes');
client
  .query(`COPY newhomes (id,title,location,cost,rating,reviews,type,favorite,photos) FROM '${homesCsvPath}' DELIMITER ',' CSV HEADER;`)
  .then((result) => {
    console.log('seeding homes success', result.rowCount);
    console.timeEnd('seed-10M-homes');
  })
  .catch((err) => console.error('seeding homes fail', err.stack));
// time: 5.6 min

// create "homeRelation" table
client
  .query('CREATE TABLE IF NOT EXISTS homeRelation (homeId integer NOT NULL, similarHomeId integer NOT NULL);')
  .then(() => console.log('table homeRelation created'))
  .catch((err) => console.error('table homeRelation creation error', err.stack));

// copy data into "homeRelation" table
const homeRelationsCsvPath = path.join(__dirname, 'homeRelation.csv');
console.time('seed-100M-homeRelation');
client
  .query(`COPY homeRelation (homeId,similarHomeId) FROM '${homeRelationsCsvPath}' DELIMITER ',' CSV HEADER;`)
  .then((result) => {
    console.log('seeding homeRelation success', result.rowCount);
    console.timeEnd('seed-100M-homeRelation');
  })
  .catch((err) => console.error('seeding homeRelation fail', err.stack));
// time: 9.4 min


// add index for "newhomes" table
// client
//   .query('CREATE INDEX home_id ON newhomes(id);')
//   .then((result) => {
//     console.log('create index home_id success', result);
//   })
//   .catch((err) => console.error('create index home_id fail', err.stack));

// add index for "homeRelation" table
client
  .query('CREATE INDEX homeid ON homeRelation(homeId);')
  .then(() => {
    console.log('create index homeid success');
  })
  .catch((err) => console.error('create index homeid fail', err.stack));

client
  .query('CREATE INDEX similarhomeid ON homerelation(similarHomeId);')
  .then(() => console.log('create similarhomeid index success'))
  .catch((err) => console.log('create similarhomeid index fail', err.stack));

// add foreign keys for "homeRelation" table
client
  .query('ALTER TABLE homeRelation ADD CONSTRAINT p_fk FOREIGN KEY (homeId) REFERENCES newhomes(id);')
  .then(() => {
    console.log('create fk p success');
  })
  .catch((err) => console.error('create fk p fail', err.stack));

client
  .query('ALTER TABLE homeRelation ADD CONSTRAINT s_fk FOREIGN KEY (similarHomeId) REFERENCES newhomes(id);')
  .then(() => {
    console.log('create fk s success');
    client.end();
  })
  .catch((err) => console.error('create fk s fail', err.stack));
