var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);
var app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(4009, () => {
  console.log('server is running at 4009');
});
