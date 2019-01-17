const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 1337;
const routes = require('./server/routes/routes');

app.set(__dirname, '/restful-crud/dist/restful-crud/');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/restful-crud')));
app.use(routes);

app.listen(port, function() {
  console.log('Listening on port:', port);
});
