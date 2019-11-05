/* eslint-disable no-console */
const faker = require('faker');

const getASimilarHomes = (id) => {
  const index = faker.random.number({ min: 1, max: 10000000 });
  if (index !== id) {
    return index;
  }
  return getASimilarHomes(id);
};

let homeToHomeId = 1;
let primaryHomeId = 1;
if (primaryHomeId === 10000000) {
  primaryHomeId = 1;
}

function HomeToHome() {
  this.id = homeToHomeId;
  this.primaryHomeId = primaryHomeId;
  this.secondaryHomeId = getASimilarHomes(this.primaryHomeId);
}

function createHomeToHome() {
  let batch = '';
  for (let i = 1; i <= 10; i += 1) {
    const record = new HomeToHome();
    batch += `${record.id},${record.primaryHomeId},${record.secondaryHomeId}\n`;
    homeToHomeId += 1;
  }
  primaryHomeId += 1;
  return batch;
}

// console.log(createHomeToHome());

module.exports = createHomeToHome;
