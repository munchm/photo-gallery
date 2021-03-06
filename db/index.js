const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);


const getRestaurantInfo = (restaurantId, callback) => {
  pool.query(`SELECT * FROM restaurants WHERE id = ${restaurantId}`, (error, restaurantInfo) => {
    if (error) {
      callback(error);
    } else {
      callback(null, restaurantInfo.rows);
    }
  })
}

const getAllPhotosforRestaurant = (restaurantId, callback) => {
  const start = process.hrtime();
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${restaurantId}`, (error, photos) => {
    const stop = process.hrtime(start);// [seconds, nanoseconds]
    console.log('QUERY:', stop[1] / 1000000); // ms
    if (error) {
      callback(error);
    } else {
      callback(null, photos.rows);
    }
  })
}


const addNewPhoto = (users_id, restaurant_id, photo_url, caption = '', callback) => {
  pool.query(`INSERT INTO photos (users_id, restaurant_id, photo_url, caption) VALUES (${users_id}, ${restaurant_id}, ${photo_url}, ${caption})`, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, success);
    }
  })
}


module.exports = {
  getRestaurantInfo,
  getAllPhotosforRestaurant
}
