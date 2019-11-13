const path = require('path');
const client = require('./index');

const Console = console;

const createNewHomesTable = async () => {
  client
    .query('CREATE TABLE IF NOT EXISTS newhomes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL,rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, photos text[] NOT NULL);')
    .then(() => Console.log('Table newhomes created'))
    .catch((err) => console.error('Table newhomes creation error', err.stack));
};

const seedNewHomesTable = async () => {
  const homesCsvPath = path.join(__dirname, 'newhomes.csv');
  client
    .query(`COPY newhomes (id,title,location,cost,rating,reviews,type,favorite,photos) FROM '${homesCsvPath}' DELIMITER ',' CSV HEADER;`)
    .then((result) => Console.log('Seeding newhomes success', result.rowCount))
    .catch((err) => console.error('Seeding newhomes fail', err.stack));
};
// time: 5.6 min
const createIndexId = async () => {
  client
    .query('CREATE INDEX idx_id ON newhomes(id);')
    .then(() => Console.log('Create idx_id success'))
    .catch((err) => console.error('Create idx_id fail', err.stack));
};

const createHomeRelationTable = async () => {
  client
    .query('CREATE TABLE IF NOT EXISTS homeRelation (homeId integer NOT NULL, similarHomeId integer NOT NULL);')
    .then(() => Console.log('Table homeRelation created'))
    .catch((err) => console.error('Table homeRelation creation error', err.stack));
};

const seedHomeRelationTable = async () => {
  const homeRelationsCsvPath = path.join(__dirname, 'homeRelation.csv');
  client
    .query(`COPY homeRelation (homeId,similarHomeId) FROM '${homeRelationsCsvPath}' DELIMITER ',' CSV HEADER;`)
    .then((result) => Console.log('Seeding homeRelation success', result.rowCount))
    .catch((err) => console.error('Seeding homeRelation fail', err.stack));
};
// time: 9.4 min

const addFirstForeignKey = async () => {
  client
    .query('ALTER TABLE homeRelation ADD CONSTRAINT p_fk FOREIGN KEY (homeId) REFERENCES newhomes(id);')
    .then(() => Console.log('Create fk p success'))
    .catch((err) => console.error('Create fk p fail', err.stack));
};

const addSecondForeignKey = async () => {
  client
    .query('ALTER TABLE homeRelation ADD CONSTRAINT s_fk FOREIGN KEY (similarHomeId) REFERENCES newhomes(id);')
    .then(() => Console.log('create fk s success'))
    .catch((err) => console.error('create fk s fail', err.stack));
};

const createIndexHomeId = async () => {
  client
    .query('CREATE INDEX idx_homeId ON homerelation(homeId);')
    .then(() => Console.log('Create idx_homeid success'))
    .catch((err) => console.error('create idx_homeid fail', err.stack));
};

const createIndexSimilarHomeId = async () => {
  client
    .query('CREATE INDEX idx_similarhomeId ON homerelation(similarHomeId);')
    .then(() => Console.log('Create idx_similarhomeId success'))
    .catch((err) => console.error('create idx_similarhomeId fail', err.stack));
};

const seed = async () => {
  await createNewHomesTable();
  await seedNewHomesTable();
  await createIndexId();
  await createHomeRelationTable();
  await seedHomeRelationTable();
  await addFirstForeignKey();
  await addSecondForeignKey();
  await createIndexHomeId();
  await createIndexSimilarHomeId();
  await client.end();
};

seed();
