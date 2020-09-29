const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  currentImage: String,
  imageList: [String],
  review: String,
  userId: Number,
  helpful: Number,
  notHelpful: Number
});

const photo = mongoose.model('Photo', photoSchema);

module.exports = photo;