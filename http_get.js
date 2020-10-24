// import http from 'k6/http';
import { sleep } from 'k6';
import { getRandomNumber } from './dataGenerators/helperFunctions.js'


// export default function () {

//   let responses = http.get(`http://localhost:8080/restaurants/${getRandomNumber(1, 10000000)}/photos`);
//   sleep(.1);
// }
// // ${getRandomNumber(30000000, 40000000)}

import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: "30s", target: 1000 },
    { duration: "30s", target: 900 },
  ],
};


export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/${getRandomNumber(1, 10000000)}/photos`,
    ],

  ]);
}

