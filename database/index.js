/* eslint-disable no-console */
const { Pool } = require('pg');
// const path = require('path');

const pool = new Pool({
  user: 'jenny',
  host: 'localhost',
  database: 'mydb',
  password: '',
  port: 5432,
  max:100,
});


pool
  .connect()
  .then(() => console.log('postgres connected'))
  .catch((err) => console.error('postgres connection error', err.stack));

module.exports = pool;
