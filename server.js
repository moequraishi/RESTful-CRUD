const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors'),
  routes = require('./server/routes/routes'),
  app = express(),
  port = 1337;

// Setting the Path for Compiled Angular Folder
app.set('dist', path.join(__dirname, 'dist/restful-crud'));

// Body Parser used to extract json
app.use(bodyParser.json());

// See https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
app.use(bodyParser.urlencoded({extended: false}));

// CORS Module to set headers for us with default options of allowing all origins
app.use(cors());

// Setting Express Static files directory - angular's compiled folder
app.use(express.static(path.join(__dirname, 'dist/restful-crud')));

// Setting the Express Routes
app.use(routes);

// Get all routes, and send the compiled index.html file to use Angular's routing instead
// this fixes the refresh issue since an Angular route does not exist in the backend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/restful-crud/index.html'));
});

// Listening on the port/server for any changes
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
