const express = require('express');
const path = require('path');
const model = require('../db');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));


app.get('/', (req, res) => {
  res.status(201).send('success!');
});

app.listen(3003, () => {
  console.log('listening on PORT: 3003');
});
