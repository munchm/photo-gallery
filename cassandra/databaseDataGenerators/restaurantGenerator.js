const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const helpers = require('../dataGenerators/helperFunctions.js');

const cuisine = ['mexican', 'american', 'chinese', 'indian', 'sushi', 'bbq', 'mediterranean', 'ethiopian', 'southern', 'texmex', 'fastfood', 'greek']

const restaurantName = ['Shack', 'Hut', 'Eatery', 'Cafe', 'Pizzeria', 'Deli', 'Place', 'Pit', 'Dive', 'Kitchen', 'House', 'Point', 'Corner', 'Park', 'Mahal', 'Bhavan', 'Vilas', 'Bistro', 'Junction', 'Lounge', 'Station', 'Boat', 'Street', 'Bites'];

const restaurantDataGenerator = async (startCount, stopCount, csvFileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${csvFileName}.csv`));
  for (var i = startCount; i <= stopCount; i++) {
    let cuisineType = cuisine[Math.floor(Math.random() * cuisine.length)];
    let name = restaurantName[Math.floor(Math.random() * restaurantName.length)];
    writer.write({
      id: startCount,
      restaurant_name:  `${faker.name.firstName()}'s ${name}`,
      address_full: faker.address.streetAddress(),
      website_url: faker.internet.url(),
      menu_url: faker.internet.url(),
      phone_number: faker.phone.phoneNumber(),
      stars:      helpers.getRandomNumber(0, 6),
      reviews:  helpers.getRandomNumber(100, 2000),
      cuisine: cuisineType,
      address_state:      faker.address.state(),
    })
    startCount++;
  }
  await writer.end();
  console.log('done');
}

restaurantDataGenerator(0, 5000000, 'cassandraRestaurants1');
restaurantDataGenerator(5000001, 10000000, 'cassandraRestaurants2');