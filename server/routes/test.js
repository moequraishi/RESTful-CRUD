const express = require('express'),
  routes = express.Router();

routes.get('/test', function(req, res) {
  res.status(200).json({message: 'made it work!'});
});

module.exports = routes;
