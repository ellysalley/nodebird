const express = require('express');

const db = require('./models');

const app = express();
db.sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hello, sever');
});

app.get('/about', (req, res) => {
  res.send('Hello, about');
});

app.listen(3065, () => {
  console.log('server is running on localhost:3065')
});