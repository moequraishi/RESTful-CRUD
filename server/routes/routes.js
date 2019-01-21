const express = require('express'),
  controller = require('../controller/routes-controller'),
  routes = express.Router();

routes.post('/new', controller.create);
routes.get('/all', controller.read);
routes.get('/users', controller.readTest);
routes.post('/update/:id', controller.update);
routes.post('/delete/:id', controller.destroy);

module.exports = routes;
