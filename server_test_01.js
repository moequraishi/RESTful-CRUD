const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  routes = require('./server/routes/routes'),
  port = 1337;

app.set('public', __dirname + '/dist/restful-crud');
app.use(express.static(__dirname + '/dist/restful-crud'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/restful-crud/index.html');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
