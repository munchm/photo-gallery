const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const helpers = require('./helperFunctions.js');

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
      reviews:  helpers.getRandomNumber(100, 2000),
      address_full: faker.address.streetAddress(),
      phone_number: faker.phone.phoneNumber(),
      website_url: faker.internet.url(),
      cuisine: cuisineType,
      menu_url: faker.internet.url(),
    })
    startCount++;
  }
  await writer.end();
  console.log('done');

}


restaurantDataGenerator(0, 5000000, 'restaurants1');
restaurantDataGenerator(5000001, 10000000, 'restaurants2');
