const express = require('express');
const path = require('path');
const model = require('../db');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

const getAllPhotos = function(callback) {
  // need to query the database for all users
  // this function will be called in a controller triggered by a GET request
  // need to find how to do it without sqlLite
  console.log(model.photo)
  model.photo.find({}, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

app.get('/', (req, res) => {
  res.status(201).send('success!');
});

app.get('/photos', (req, res) => {
  // cosole.log(model.videogame.find)
  getAllPhotos((data) => {
    res.status(200).send(data);
  });
});

app.listen(3003, () => {
  console.log('listening on PORT: 3003');
});
