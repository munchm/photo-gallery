const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./db');

const { photo } = db;

const flushDb = () => {
  photo.remove({}, (err, success) => {
    if (err) {
      console.err(err);
    } else {
      console.log('success: ', success);
    }
  });
};

const seedPhotos = () => {
  // clear db
  flushDb();

  const result = [];

  for(let i = 0; i < 100; i++) {
    const dataItem = {};
    dataItem.imageList = [];

    // push 15 pictures into image list
    for(let k = 0; k < 15; k++) {
      dataItem.imageList.push(`https://yelp-photos.s3.us-east-2.amazonaws.com/168s+(${k}).jpg`);
    };
    // set current image to first image
    dataItem.currentImage = 'https://yelp-photos.s3.us-east-2.amazonaws.com/168s+(1).jpg';

    dataItem.review = faker.lorem.sentence(25);
    userId = i;
    dataItem.helpful = faker.random.number();
    dataItem.notHelpful = faker.random.number();

    const photoModel = new db.photo(dataItem);
    const savedData = photoModel.save();
    result.push(savedData);
  }

  Promise.all(result)
  .then((results) => {
    console.log('product: ', results);
  })
  .catch((err) => {
    console.error(err);
  })
  .then(() => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

  return result;

}

seedPhotos();