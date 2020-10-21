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
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${restaurantId}`, (error, photos) => {
    if (error) {
      callback(error);
    } else {
      callback(null, photos.rows);
    }
  })
}


module.exports = {
  getRestaurantInfo,
  getAllPhotosforRestaurant
}