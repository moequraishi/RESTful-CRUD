const express = require('express'),
  Test = require('../models/dummy'),
  path = require('path'),
  socketController = require('../controller/socket-controller'),
  socket_routes = express.Router();

socket_routes.get('/all', socketController.getAll);
socket_routes.get('/users', socketController.getData);
socket_routes.post('/updateTest', socketController.updateData);
socket_routes.post('/update/:id', socketController.updateUser);
socket_routes.post('/new', socketController.newUser);
socket_routes.post('/delete/:id', socketController.destroy);

module.exports = socket_routes;
