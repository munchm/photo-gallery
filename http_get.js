import http from 'k6/http';
import { sleep } from 'k6';
import { getRandomNumber } from './dataGenerators/helperFunctions.js'

export let options = {
  stages: [
    { duration: '30s', target: 200 }, // below normal load
    { duration: '30s', target: 300 },
    { duration: '30s', target: 400 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 600 },
    { duration: '30s', target: 700 },
  ],
};
export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/${getRandomNumber(30000000, 40000000)}/photos`,
      null,
    ],
  ]);
  sleep(1);
}
// ${getRandomNumber(30000000, 40000000)}