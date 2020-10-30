require('newrelic');

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const path = require('path');
const morgan = require('morgan');
const redis = require('redis');


const app = express();
const port = 1337;

const client = redis.createClient({host: '54.241.217.90'});

client.on("error", function(error) {
  console.error(error);
});



app.use(express.json());
app.use(morgan('dev'));
app.use('/loaderio-da857cfd169c21c65b14c3e253206d62.txt', express.static(path.join(__dirname, '../public/loaderio-da857cfd169c21c65b14c3e253206d62.txt')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', getRestaurant = function(req, res) {
  let restaurantId = req.params.id;
  db.getRestaurantInfo(restaurantId, (error, restaurantInfo) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(restaurantInfo);
    }
  });
});

app.get('/restaurants/:id/photos', getPhotos  = function(req, res) {
  const { id } = req.params;
  const photoRedisKey = `${id}`;

  client.get(photoRedisKey, (err, photos) => {
    if (photos) {
      return res.send(photos);
    } else {
 
      db.getAllPhotosforRestaurant(id, (error, photos) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
        } else {
	  client.set(photoRedisKey, JSON.stringify(photos));
          res.status(200).send(photos);
        }
      }); 
    }
  });
});


app.get('/:id', getLoadingPage = function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  });

