const express = require('express'),
  Test = require('../models/dummy'),
  path = require('path'),
  routes = express.Router();

// Demo RESTful API below
routes.get('/users', (req, res) => {
  res.status(200).json({ message: 'Connected to user a!' });
});

// Actual RESTful API below
routes.post('/new', (req, res) => {
  const newTest = new Test({name: req.body.name});
  newTest.save(function(err, data) {
    if (err) {console.log('There was an error:', err)}
    if (data) {
      console.log('Successfully added user: ', data);
      res.status(200).json(data);
    }
  });
});

routes.get('/all', (req, res) => {
  Test.find({}, function(err, data) {
    if (err) {console.log('Error getting the data: ', err)}
    if (data) { res.status(200).json(data) }
  });
});

routes.post('/update/:id', (req, res) => {
  console.log(req.body);
  Test.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name, updatedAt: req.body.updatedAt} }, {new: true}, (err, data) => {
    if (err) {console.log('Error getting the data: ', err)}
    if (data) {
      // console.log('User updated: ', data.name);
      res.status(200).json(data);
    }
  })
});

routes.post('/delete/:id', (req, res) => {
  // console.log(req.params.id);
  Test.findOneAndDelete({_id: req.params.id}, (err, data) => {
    if (err) {console.log('Error getting the data: ', err)}
    if (data) {
      console.log('deleted user: ', data.name);
      res.status(200).json(data);
    }
  });
});

module.exports = routes;
