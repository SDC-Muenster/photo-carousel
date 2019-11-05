/* eslint-disable no-console */

const faker = require('faker');
const images = require('../homes');

const getPhotos = () => {
  const index = faker.random.number({ min: 0, max: images.allHomes.length - 1 });
  return images.allHomes[index];
};

function SimilarHome(i) {
  this.id = i;
  this.title = faker.lorem.words();
  this.location = faker.address.city();
  this.photos = getPhotos();
  this.cost = faker.random.number({ min: 80, max: 150 });
  this.rating = faker.random.number({ min: 3, max: 5, precision: 0.01 });
  this.reviews = faker.random.number();
  this.type = faker.lorem.word();
  this.favorite = faker.random.boolean();
}

function Home(i) {
  this.home_id = i;
  this.homes = [];
}

const similarHomes = [];
function populateSimilarHomes() {
  for (let i = 1; i <= 100; i += 1) {
    const oneSimilarHome = new SimilarHome(i);
    similarHomes.push(oneSimilarHome);
  }
}

populateSimilarHomes();

let homeId = 0;
function generateHomes(numOfHomes) {
  let batch = '';
  for (let k = 1; k <= numOfHomes; k += 1) {
    homeId += 1;
    const oneHome = new Home(homeId);
    for (let i = 1; i <= 10; i += 1) {
      const index = Math.floor(Math.random() * 99);
      oneHome.homes.push(similarHomes[index]);
    }
    batch += `${JSON.stringify(oneHome)},\n`;
  }
  return batch;
}

module.exports = generateHomes;
