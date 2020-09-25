const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./db');

const { photo } = db;

const flushDb = () => {
  videogame.remove({}, (err, success) => {
    if (err) {
      console.err(err);
    } else {
      console.log('success: ', success);
    }
  });
};

const seedPhotos = () => {
  flushDb();

}

seedPhotos();