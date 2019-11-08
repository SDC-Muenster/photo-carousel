const client = require('./cassandra.index.js');

// client.execute(`CREATE KEYSPACE IF NOT EXISTS myCassDb WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}`)
//   .then(() => console.log('KEYSPACE myCassDb created!'))
//   .catch((err) => console.log('keyspace error', err));

// client.execute('CREATE TABLE IF NOT EXISTS myCassDb.homes (id int PRIMARY KEY, title text, location text, cost int, rating decimal, reviews int, type text, favorite boolean, similarhomes list<text>, photos list<text> )')
//   .then(() => console.log('Table homes created'))
//   .catch((err) => console.log('table error', err));

/** COPY FROM can only be run in cqlsh
 *  COPY myCassDb.homes (id, title, location, cost, rating, reviews, type, favorite, similarhomes, photos) FROM '/Users/jenny/dev/hrr41/sdc/more-homes-module/database/homes.csv' WITH DELIMITER=',' AND HEADER=TRUE;
 * */

client.execute('SELECT * FROM myCassDb.homes WHERE id = ?', ['12345'], { prepare: true })
  .then((record) => console.log(record.rows[0]))
  .catch((err) => console.log('select error', err));
