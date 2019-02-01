const express = require('express');

var app = express();

// app.get('/', (req, res) => {
//   res.status(200).send('Hello world!!!');
// });

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Application'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'shipra',
    age: 28
  }, {
    name: 'abhishek',
    age: 27
  }
  ]);
});

app.listen(3000, () => {
    console.log('server is up and running at port 3000');
});

module.exports.app = app;
