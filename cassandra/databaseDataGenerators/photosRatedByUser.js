
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const {padZeros, getRandomNumber} = require('../dataGenerators/helperFunctions.js');

const helpful = [true, false];

const photosRatedByUserGenerator = async (startCount, stopCount, csvFileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${csvFileName}.csv`));
  for (var i = startCount; i <= stopCount; i++) {
   let isHelpful = helpful[Math.floor(Math.random() * helpful.length)];
    writer.write({
      id:                   startCount,
      user_id:              getRandomNumber(0, 10000001),
      restaurant_id:        getRandomNumber(0, 10000001),
      photo_id:             getRandomNumber(0, 10000001),
      helpful:              isHelpful,
    })
    startCount++;
  }
  await writer.end();
  console.log('done');
}


photosRatedByUserGenerator(0, 5000000, 'cassandraPhotosRatedByUser1');
photosRatedByUserGenerator(5000001, 10000000, 'cassandraPhotosRatedByUser2');
photosRatedByUserGenerator(10000001, 15000000, 'cassandraPhotosRatedByUser3');
photosRatedByUserGenerator(15000001, 20000000, 'cassandraPhotosRatedByUser4');
photosRatedByUserGenerator(20000001, 25000000, 'cassandraPhotosRatedByUser5');
photosRatedByUserGenerator(25000001, 30000000, 'cassandraPhotosRatedByUser6');
photosRatedByUserGenerator(30000001, 35000000, 'cassandraPhotosRatedByUser7');
photosRatedByUserGenerator(35000001, 40000000, 'cassandraPhotosRatedByUser8');
photosRatedByUserGenerator(40000001, 45000000, 'cassandraPhotosRatedByUser9');
photosRatedByUserGenerator(45000001, 50000000, 'cassandraPhotosRatedByUser10');