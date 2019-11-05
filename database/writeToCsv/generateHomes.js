/* eslint-disable no-console */
const faker = require('faker');

let homeId = 1;
function Home() {
  this.id = homeId;
  this.title = faker.lorem.words();
  this.location = faker.address.city();
  this.cost = faker.random.number({ min: 80, max: 150 });
  this.rating = faker.random.number({ min: 3, max: 5 }).toFixed(2);
  this.reviews = faker.random.number();
  this.type = faker.lorem.word();
  this.favorite = faker.random.boolean();
}
// console.log(new Home());

function generateHomes(numOfHomes) {
  let batch = '';
  for (let k = 1; k <= numOfHomes; k += 1) {
    homeId += 1;
    const oneHome = new Home(homeId);
    batch += `${oneHome.id},${oneHome.title},${oneHome.location},${oneHome.cost},${oneHome.rating},${oneHome.reviews},${oneHome.type},${oneHome.favorite}\n`;
  }
  return batch;
}
// console.log(generateHomes(3));

module.exports = generateHomes;
