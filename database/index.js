const mongoose = require('mongoose');

const { Schema } = mongoose;
const Console = console;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: false,
};

mongoose.connect('mongodb://127.0.0.1:27017/homes', options)
  .then(Console.log('Connected to DB'))
  .catch((err) => console.error('Connection error', err));

// each home
const similarHomeSchema = new Schema({
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
const homeSchema = new Schema({
  home_id: Number,
  homes: Array,
});


const SimilarHome = mongoose.model('EachHome', similarHomeSchema);
const Home = mongoose.model('HomeSet', homeSchema);

module.exports = {
  SimilarHome,
  Home,
};
