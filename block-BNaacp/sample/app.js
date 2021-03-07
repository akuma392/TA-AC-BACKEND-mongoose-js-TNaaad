var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);
var app = express();
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/users', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, user) => {
    res.json({ users: user });
  });
});
// app.get('/users/:id', (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     res.json(user);
//   });
// });
app.get('/users/:name', (req, res) => {
  console.log(req.params.name);
  User.findOne({ name: req.params.name }, (err, user) => {
    res.json(user);
  });
});
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      res.json(user);
    }
  );
});

app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    res.send(`${user.name} was deleted`);
  });
});

app.listen(4000, () => {
  console.log('server is running at 4000');
});
