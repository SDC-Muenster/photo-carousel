/* eslint-disable no-console */
const faker = require('faker');

const getASimilarHomes = (id) => {
  const index = faker.random.number({ min: 1, max: 10000000 });
  if (index !== id) {
    return index;
  }
  return getASimilarHomes(id);
};

let homeId = 1;
if (homeId === 10000000) {
  homeId = 1;
}

function HomeToHome() {
  this.homeId = homeId;
  this.similarHomeId = getASimilarHomes(this.homeId);
}

function createHomeToHome() {
  let batch = '';
  for (let i = 1; i <= 10; i += 1) {
    const record = new HomeToHome();
    batch += `${record.homeId},${record.similarHomeId}\n`;
  }
  homeId += 1;
  return batch;
}

// console.log(createHomeToHome());

module.exports = createHomeToHome;
