/* eslint-disable no-console */

const faker = require('faker');
const images = require('./homeImages');

function Photo(id) {
  this.id = id;
  this.url = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.homeId = faker.random.number({ min: 1, max: 10000000 });
}


module.exports = Photo;
