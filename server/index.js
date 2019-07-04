const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, sever');
});

app.get('/about', (req, res) => {
  res.send('Hello, about');
});

app.listen(8080, () => {
  console.log('server is running on localhost:8080')
});