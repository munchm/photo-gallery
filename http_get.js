import http from 'k6/http';
import { sleep } from 'k6';
import { getRandomNumber } from './dataGenerators/helperFunctions.js'
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: "1m", target: 700 },
    { duration: "1m", target: 670 },
  ],
};


export default function () {
  const BASE_URL = 'http://localhost:8080';
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/restaurants/${getRandomNumber(1, 10000000)}/photos`,
    ],

  ]);
}

