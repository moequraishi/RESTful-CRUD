const Test = require('../models/dummy');

// Create
const create = (req, res) => {
  const newTest = new Test({name: req.body.name});
  newTest.save(function(err, data) {
    if (err) {console.log('There was an error:', err)}
    if (data) {
      console.log('Successfully added user: ', data);
      res.status(200).json(data);
    }
  });
};

// Read
const read = (req, res) => {
  Test.find({}).sort('-updatedAt').exec(function (err, data) {
    if (err) {
      console.log('Error getting the data: ', err)
    }
    if (data) {
      res.status(200).json(data)
    }
  });
};

// Read - Test JSON Data
const readTest = (req, res) => {
  res.status(200).json({ message: 'Changed!' });
};

// Update
const update = (req, res) => {
  console.log(req.body);
  Test.findOneAndUpdate({_id: req.params.id}, {
    $set: {
      name: req.body.name,
      updatedAt: req.body.updatedAt
    }
  }, {new: true}, (err, data) => {
    if (err) {
      console.log('Error getting the data: ', err)
    }
    if (data) {
      res.status(200).json(data);
    }
  });
};

// Destroy
const destroy = (req, res) => {
  Test.findOneAndDelete({_id: req.params.id}, (err, data) => {
    if (err) {
      console.log('Error getting the data: ', err)
    }
    if (data) {
      console.log('deleted user: ', data.name);
      res.status(200).json(data);
    }
  });
};

module.exports = {
  create,
  read,
  readTest,
  update,
  destroy
};
