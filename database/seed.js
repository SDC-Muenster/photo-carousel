const mongoose = require('mongoose');
const faker = require('faker');
const homesImages = require('./homes');
const db = require('./index');

const Console = console;

/** Random generators */

// returns random true or false
const isFavorite = () => Math.random() < 0.5;

// returns random number between 0 and 5, 2 decimal places
const rating = () => {
  const rateMin = 3;
  const rateMax = 5;
  return (Math.random() * (rateMax - rateMin) + rateMin).toFixed(2);
};

// returns random number between 80 and 150
const cost = () => {
  const min = 80;
  const max = 150;
  return Math.floor(Math.random() * (max - min) + min);
};

let currIndex = 0;
const getHomeImg = () => {
  const currImgSet = homesImages.allHomes[currIndex];
  if (currIndex === homesImages.allHomes.length - 1) {
    currIndex = 0;
  } else {
    currIndex += 1;
  }
  return currImgSet;
};

const makeHomesSet = () => {
  const homesArr = [];
  for (let i = 0; i < 10; i += 1) {
    const eachHome = new db.EachHome({
      id: i,
      title: faker.lorem.words(),
      location: faker.address.city(),
      photos: getHomeImg(),
      cost: cost(),
      rating: rating(),
      reviews: faker.random.number(),
      type: faker.lorem.word(),
      favorite: isFavorite(),
    });

    homesArr.push(eachHome);
  }
  return homesArr;
};

// const makeHomesSet = () => {
//   var homesArr = [];
//   for (var i = 0; i < 10; i++) {
//     var oneHome = new HomeObjMaker;
//     homesArr.push(oneHome);
//   }
//   return homesArr;
// }


const homesForDB = [];

for (let i = 0; i < 101; i += 1) {
  const home = new db.HomeSet({
    home_id: i,
    homes: makeHomesSet(),
  });
  homesForDB.push(home);
}

db.HomeSet.deleteMany({})
  .then(() => Console.log('clean db'))
  .catch((err) => console.error(err));

db.HomeSet.insertMany(homesForDB)
  .then((docs) => {
    Console.log('documents added', docs);
    mongoose.disconnect();
    Console.log('connection closed');
  })
  .catch((err) => console.error(err));
