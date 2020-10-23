import http from 'k6/http';
import { sleep } from 'k6';
import { getRandomNumber } from './dataGenerators/helperFunctions.js'

export let options = {
  stages: [
    { duration: '30s', target: 1000 }, // below normal load
    { duration: '30s', target: 1100 },
    { duration: '30s', target: 1200 },
    { duration: '30s', target: 1300 },
    { duration: '30s', target: 1400 },
    { duration: '30s', target: 1500 },
  ],
};
export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/${getRandomNumber(1, 10000000)}/photos`,
      null,
    ],
  ]);
  sleep(1);
}
// ${getRandomNumber(30000000, 40000000)}