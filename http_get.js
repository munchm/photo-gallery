import http from 'k6/http';
import { sleep } from 'k6';
import { getRandomNumber } from './dataGenerators/helperFunctions.js'

export let options = {
  stages: [
    { duration: '30s', target: 600 }, // below normal load
    { duration: '30s', target: 700 },
    { duration: '30s', target: 800 },
    { duration: '30s', target: 900 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 1100 },
  ],
};
export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/${getRandomNumber(9000000, 10000000)}/photos`,
      null,
    ],
  ]);
  sleep(1);
}
// ${getRandomNumber(30000000, 40000000)}