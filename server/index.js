const express = require('express');
const fs = require('fs');
const app = express();
require('newrelic');
const port = 8080;
var bodyParser = require('body-parser');
const db = require('../db/index.js');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

app.use(express.static(path.join(__dirname, '/../public')));


app.get('/restaurants/:id', (req, res) => {
  let restaurantId = req.params.id;
  db.getRestaurantInfo(restaurantId, (error, restaurantInfo) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(restaurantInfo);
    }
  });
});

app.get('/restaurants/:id/photos', (req, res) => {
  let restaurantId = req.params.id;
  db.getAllPhotosforRestaurant(restaurantId, (error, photos) => {
    if (error) {
      res.status(402).send(error);
    } else {
      res.status(200).send(photos);
    }
  });
});

// app.post('/restaurants/:id/photos', (req, res) => {
//   let restaurant_id = req.params.id;
//   console.log(req.params);

// })

app.get('/*', (req, res) => {
  res.sendFile('/Users/jwildermuth/hackreactor/SDC/photo-gallery/public/index.html');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
