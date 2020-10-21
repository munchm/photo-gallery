
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const {padZeros, getRandomNumber} = require('../dataGenerators/helperFunctions.js');

const cuisine = ['mexican', 'american', 'chinese', 'indian', 'sushi', 'bbq', 'mediterranean', 'ethiopian', 'southern', 'texmex', 'fastfood', 'greek']

const restaurantName = ['Shack', 'Hut', 'Eatery', 'Cafe', 'Pizzeria', 'Deli', 'Place', 'Pit', 'Dive', 'Kitchen', 'House', 'Point', 'Corner', 'Park', 'Mahal', 'Bhavan', 'Vilas', 'Bistro', 'Junction', 'Lounge', 'Station', 'Boat', 'Street', 'Bites'];

const photosByRatingGenerator = async (startCount, stopCount, csvFileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${csvFileName}.csv`));

  for (var i = startCount; i <= stopCount; i++) {
    let photoImageFile = padZeros(getRandomNumber(1, 1001), 4);
    let photo_url = `https://sdcphotogallery.s3-us-west-1.amazonaws.com/images/${photoImageFile}.jpg`;
    let avatarImageFile = padZeros(getRandomNumber(1, 1001), 4);
    let avatar_url = `https://sdcphotogallery.s3-us-west-1.amazonaws.com/avatarImages/${avatarImageFile}.jpg`;
    let date = faker.date.past(10).toString();
    date = date.split(' ').slice(0, 5).join(' ');
    writer.write({
      id:                   startCount,
      created_at:           date,
      user_first_name:      faker.name.firstName(),
      user_last_name:       faker.name.lastName(),
      restaurant_id:        getRandomNumber(0, 10000001),
      photo_url:            photo_url,
      caption:              faker.lorem.sentences(),
      rating:               getRandomNumber(0, 50001),
      user_reviews:         getRandomNumber(0, 3001),
      user_friends:         getRandomNumber(0, 301),
      avatar_url:           avatar_url,
      photo_id:             getRandomNumber(0, 10000001),
    })
    startCount++;
  }
  await writer.end();
  console.log('done');
}


photosByRatingGenerator(0, 1000000, 'cassandraPhotosByRating1');
photosByRatingGenerator(1000001, 2000000, 'cassandraPhotosByRating2');
photosByRatingGenerator(2000001, 3000000, 'cassandraPhotosByRating3');
photosByRatingGenerator(3000001, 4000000, 'cassandraPhotosByRating4');
photosByRatingGenerator(4000001, 5000000, 'cassandraPhotosByRating5');
photosByRatingGenerator(5000001, 6000000, 'cassandraPhotosByRating6');
photosByRatingGenerator(6000001, 7000000, 'cassandraPhotosByRating7');
photosByRatingGenerator(7000001, 8000000, 'cassandraPhotosByRating8');
photosByRatingGenerator(8000001, 9000000, 'cassandraPhotosByRating9');
photosByRatingGenerator(9000001, 10000000, 'cassandraPhotosByRating10');

