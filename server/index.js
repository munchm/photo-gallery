require('newrelic');

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const path = require('path');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;



if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        // Create a worker
        cluster.fork();
    }
} else {

    const app = express();
    const port = 8080;

    app.use(express.json());

    app.use(express.static(path.join(__dirname, '/../public')));

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
      const restaurantId = req.params.id;
      db.getAllPhotosforRestaurant(restaurantId, (error, photos) => {
        if (error) {
          res.status(402).send(error);
        } else {
          res.status(200).send(photos);
        }
      });
    });


    app.get('/*', getLoadingPage = function (req, res) {
      res.sendFile('/Users/jwildermuth/hackreactor/SDC/photo-gallery/public/index.html');
    })

    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    })
}


cluster.on('exit', function(worker, code, signal) {
  console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
  cluster.fork();
});


