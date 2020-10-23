import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '1m', target: 200 }, // below normal load
    { duration: '1m', target: 300 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 700 },
    // { duration: '2m', target: 200 }, // normal load
    // { duration: '5m', target: 200 },
    // { duration: '2m', target: 300 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    // { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/1/photos`,
      null,
      // { tags: { name: 'PublicCrocs' } },
    ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/2/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/3/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/4/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
  ]);
  sleep(1);
}