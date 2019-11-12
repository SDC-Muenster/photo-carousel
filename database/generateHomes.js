/* eslint-disable no-console */
const faker = require('faker');
const images = require('./homeImages');

const getPhotos = () => {
  const numOfPhotos = faker.random.number({ min: 10, max: 15 });
  const photos = []
  for (let i = 0; i < numOfPhotos; i += 1) {
    const url = images[faker.random.number({ min: 0, max: images.length - 1 })];
    photos.push(url);
  }
  return `"{${photos.join(',')}}"`;
}

let homeId = 0;
function Home() {
  this.id = homeId;
  this.title = faker.lorem.words();
  this.location = faker.address.city();
  this.cost = faker.random.number({ min: 80, max: 150 });
  this.rating = faker.random.number({ min: 3, max: 5 }).toFixed(2);
  this.reviews = faker.random.number();
  this.type = faker.lorem.word();
  this.favorite = faker.random.boolean();
  this.photos = getPhotos();
}
// console.log(new Home());

function generateHomes(numOfHomes) {
  let batch = '';
  for (let k = 1; k <= numOfHomes; k += 1) {
    homeId += 1;
    const oneHome = new Home(homeId);
    batch += `${oneHome.id},${oneHome.title},${oneHome.location},${oneHome.cost},${oneHome.rating},${oneHome.reviews},${oneHome.type},${oneHome.favorite},${oneHome.photos}\n`;
  }
  return batch;
}
// console.log(generateHomes(3));

module.exports = generateHomes;
