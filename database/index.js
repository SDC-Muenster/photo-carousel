const mongoose = require('mongoose');

const { Schema } = mongoose;
const Console = console;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/homes', options)
  .then(Console.log('Connected to DB'))
  .catch((err) => console.error('Connection error', err));

// each home
const homeSchema = new Schema({
  id: Number,
  title: String,
  location: String,
  photos: [String],
  cost: Number,
  rating: Number,
  reviews: Number,
  type: String,
  favorite: Boolean,
});

// home set
const homeSetSchema = new Schema({
  home_id: Number,
  homes: [homeSchema],
});


const EachHome = mongoose.model('EachHome', homeSchema);
const HomeSet = mongoose.model('HomeSet', homeSetSchema);

module.exports = {
  EachHome,
  HomeSet,
};
