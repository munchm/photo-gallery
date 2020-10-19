const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const {padZeros, getRandomNumber} = require('./helperFunctions')

const helpful = [true, false];

const photoRatingsDataGenerator = async (startCount, stopCount, fileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${fileName}.csv`));
  for (var i = startCount; i <= stopCount; i++) {
    let isHelpful = helpful[Math.floor(Math.random() * helpful.length)];
    writer.write({
      id:             startCount,
      users_id:       getRandomNumber(0, 10000001),
      photo_id:      getRandomNumber(0, 10000001),
      helpful:       isHelpful
    })
   await startCount++;
  }
  await writer.end();
  console.log('done');
}


photoRatingsDataGenerator(0, 10000000, 'photoRatings1');
photoRatingsDataGenerator(10000001, 20000000, 'photoRatings2');
photoRatingsDataGenerator(20000001, 30000000, 'photoRatings3');
photoRatingsDataGenerator(30000001, 40000000, 'photoRatings4');
photoRatingsDataGenerator(40000001, 50000000, 'photoRatings5');