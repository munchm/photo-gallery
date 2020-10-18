const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const {padZeros, getRandomNumber} = require('./helperFunctions')


const userDataGenerator = async (startCount, stopCount, csvFileName) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`${csvFileName}.csv`));
  for (var i = startCount; i <= stopCount; i++) {
    let avatarImageFile = padZeros(getRandomNumber(1, 1001), 4);
    let photo_url = `https://sdcphotogallery.s3-us-west-1.amazonaws.com/avatarImages/${avatarImageFile}.jpg`;
    writer.write({
      id: startCount,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      reviews: getRandomNumber(1, 600),
      friends: getRandomNumber(1, 600),
      avatar_url: photo_url,
    })
    startCount++;
  }
  await writer.end();
  console.log('done');
}

userDataGenerator(0, 5000000, 'users1');
userDataGenerator(5000001, 10000000, 'users2')
