/* eslint-disable no-console */
const { Client } = require('pg');
// const path = require('path');

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

module.exports = client;
