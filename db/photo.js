const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({

});

const photo = mongoose.model('Photo', photoSchema);

module.exports = photo;