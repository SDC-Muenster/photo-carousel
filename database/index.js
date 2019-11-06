const { Client } = require('pg');
// const path = require('path');

const client = new Client({
  user: 'jenny',
  host: 'localhost',
  database: 'mydb',
  password: '',
  port: 5432,
});

module.exports = client;
