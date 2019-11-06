/* eslint-disable no-console */
const faker = require('faker');
const images = require('./homeImages');

const getASimilarHomes = (id) => {
  const index = faker.random.number({ min: 1, max: 10000000 });
  if (index !== id) {
    return index;
  }
  return getASimilarHomes(id);
};

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
  this.similarHomesOne = getASimilarHomes(homeId);
  this.similarHomesTwo = getASimilarHomes(homeId);
  this.similarHomesThree = getASimilarHomes(homeId);
  this.similarHomesFour = getASimilarHomes(homeId);
  this.similarHomesFive = getASimilarHomes(homeId);
  this.similarHomesSix = getASimilarHomes(homeId);
  this.similarHomesSeven = getASimilarHomes(homeId);
  this.similarHomesEight = getASimilarHomes(homeId);
  this.similarHomesNine = getASimilarHomes(homeId);
  this.similarHomesTen = getASimilarHomes(homeId);
  this.photoOne = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoTwo = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoThree = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoFour = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoFive = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoSix = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoSeven = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoEight = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoNine = images[faker.random.number({ min: 0, max: images.length - 1 })];
  this.photoTen = images[faker.random.number({ min: 0, max: images.length - 1 })];
}
// console.log(new Home());

function generateNewHomes(numOfHomes) {
  let batch = '';
  for (let k = 1; k <= numOfHomes; k += 1) {
    homeId += 1;
    const oneHome = new Home(homeId);
    batch += `${oneHome.id},${oneHome.title},${oneHome.location},${oneHome.cost},${oneHome.rating},${oneHome.reviews},${oneHome.type},${oneHome.favorite},${oneHome.similarHomesOne},${oneHome.similarHomesTwo},${oneHome.similarHomesThree},${oneHome.similarHomesFour},${oneHome.similarHomesFive},${oneHome.similarHomesSix},${oneHome.similarHomesSeven},${oneHome.similarHomesEight},${oneHome.similarHomesNine},${oneHome.similarHomesTen},${oneHome.photoOne},${oneHome.photoTwo},${oneHome.photoThree},${oneHome.photoFour},${oneHome.photoFive},${oneHome.photoSix},${oneHome.photoSeven},${oneHome.photoEight},${oneHome.photoNine},${oneHome.photoTen}\n`;
  }
  return batch;
}
// console.log(generateHomes(3));

module.exports = generateNewHomes;
