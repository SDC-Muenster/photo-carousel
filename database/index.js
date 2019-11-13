require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});


pool
  .connect()
  // eslint-disable-next-line no-console
  .then(() => console.log('postgres connected'))
  .catch((err) => console.error('postgres connection error', err.stack));

module.exports = pool;
