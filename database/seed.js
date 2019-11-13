const path = require('path');
const client = require('./index');

const Console = console;

const createNewHomesTable = async () => (
  new Promise((res, _rej) => {
    client
      .query('CREATE TABLE IF NOT EXISTS newhomes (id integer PRIMARY KEY NOT NULL, title text NOT NULL, location text NOT NULL, cost numeric NOT NULL,rating decimal NOT NULL, reviews numeric NOT NULL, type text NOT NULL, favorite boolean NOT NULL, photos text[] NOT NULL);')
      .then(() => {
        Console.log('STEP 1: Table newhomes created');
        res();
      })
      .catch((err) => console.error('Table newhomes creation error', err.stack));
  })
);

const seedNewHomesTable = async () => (
  new Promise((res, _rej) => {
    const homesCsvPath = path.join(__dirname, 'newhomes.csv');
    client
      .query(`COPY newhomes (id,title,location,cost,rating,reviews,type,favorite,photos) FROM '${homesCsvPath}' DELIMITER ',' CSV HEADER;`)
      .then((result) => {
        Console.log('STEP 2: Seeding newhomes success', result.rowCount);
        res();
      })
      .catch((err) => console.error('Seeding newhomes fail', err.stack));
  })
);

// time: 5.6 min
const createIndexId = async () => (
  new Promise((res, _rej) => {
    client
      .query('CREATE INDEX idx_id ON newhomes(id);')
      .then(() => {
        Console.log('STEP 3: Create idx_id success');
        res();
      })
      .catch((err) => console.error('Create idx_id fail', err.stack));
  })
);


const createHomeRelationTable = async () => (
  new Promise((res, _rej) => {
    client
      .query('CREATE TABLE IF NOT EXISTS homeRelation (homeId integer NOT NULL, similarHomeId integer NOT NULL);')
      .then(() => {
        Console.log('STEP 4: Table homeRelation created');
        res();
      })
      .catch((err) => console.error('Table homeRelation creation error', err.stack));
  })
);


const seedHomeRelationTable = async () => (
  new Promise((res, _rej) => {
    const homeRelationsCsvPath = path.join(__dirname, 'homeRelation.csv');
    client
      .query(`COPY homeRelation (homeId,similarHomeId) FROM '${homeRelationsCsvPath}' DELIMITER ',' CSV HEADER;`)
      .then((result) => {
        Console.log('STEP 5: Seeding homeRelation success', result.rowCount);
        res();
      })
      .catch((err) => console.error('Seeding homeRelation fail', err.stack));
  })
);
// time: 9.4 min

const addFirstForeignKey = async () => (
  new Promise((res, _rej) => {
    client
      .query('ALTER TABLE homeRelation ADD CONSTRAINT p_fk FOREIGN KEY (homeId) REFERENCES newhomes(id);')
      .then(() => {
        Console.log('STEP 6: Create fk p success');
        res();
      })
      .catch((err) => console.error('Create fk p fail', err.stack));
  })
);

const addSecondForeignKey = async () => (
  new Promise((res, _rej) => {
    client
      .query('ALTER TABLE homeRelation ADD CONSTRAINT s_fk FOREIGN KEY (similarHomeId) REFERENCES newhomes(id);')
      .then(() => {
        Console.log('STEP 7: Create fk s success');
        res();
      })
      .catch((err) => console.error('create fk s fail', err.stack));
  })
);

const createIndexHomeId = async () => (
  new Promise((res, _rej) => {
    client
      .query('CREATE INDEX idx_homeId ON homerelation(homeId);')
      .then(() => {
        Console.log('STEP 8: Create idx_homeid success');
        res();
      })
      .catch((err) => console.error('create idx_homeid fail', err.stack));
  })
);

const createIndexSimilarHomeId = async () => (
  new Promise((res, _rej) => {
    client
      .query('CREATE INDEX idx_similarhomeId ON homerelation(similarHomeId);')
      .then(() => {
        Console.log('STEP 9: Create idx_similarhomeId success');
        res();
      })
      .catch((err) => console.error('create idx_similarhomeId fail', err.stack));
  })
);

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
  await client.end().then(Console.log('COMPLETE'));
};

seed();
