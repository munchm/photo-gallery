const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);


const getRestaurantInfo = (restaurantId, callback) => {
  console.log(restaurantId);
  pool.query(`SELECT * FROM restaurants WHERE id = ${restaurantId}`, (error, restaurantInfo) => {
    if (error) {
      callback(error);
    } else {
      callback(restaurantInfo);
    }
  })
}

// pool.query('SELECT * FROM users WHERE id = 8000', (error, userInfo) => {
//   console.log(error, userInfo);
//   pool.end();
// })

module.exports = {
  getRestaurantInfo
}


