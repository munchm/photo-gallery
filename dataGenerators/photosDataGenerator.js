const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const {padZeros, getRandomNumber} = require('./helperFunctions')



const photosDataGenerator =  async (startCount, stopCount, csvFileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${csvFileName}.csv`));

  for (var i = startCount; i <= stopCount; i++) {
    let photoImageFile = padZeros(getRandomNumber(1, 1001), 4);
    let photo_url = `https://sdcphotogallery.s3-us-west-1.amazonaws.com/images/${photoImageFile}.jpg`;
    let date = faker.date.past(10).toString();
    date = date.split(' ').slice(0, 5).join(' ');
    writer.write({
      id:             startCount,
      created_at:     date,
      users_id:       getRandomNumber(0, 10000001),
      restaurant_id:  getRandomNumber(0, 10000001),
      photo_url:      photo_url ,
      caption:        faker.lorem.sentences(),
      rating:         getRandomNumber(0, 5001),
    })
    startCount++;
  }
  await writer.end();
  console.log('done');
}

photosDataGenerator(0, 1000000, 'photos1');
photosDataGenerator(1000001, 2000000, 'photos2');
photosDataGenerator(2000001, 3000000, 'photos3');
photosDataGenerator(3000001, 4000000, 'photos4');
photosDataGenerator(4000001, 5000000, 'photos5');
photosDataGenerator(5000001, 6000000, 'photos6');
photosDataGenerator(6000001, 7000000, 'photos7');
photosDataGenerator(7000001, 8000000, 'photos8');
photosDataGenerator(8000001, 9000000, 'photos9');
photosDataGenerator(9000001, 10000000, 'photos10');


