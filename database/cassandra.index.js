const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
});

client.connect()
  .then(() => console.log('Connected!'))
  .catch((err) => console.log('connection error', err));

module.exports = client;
