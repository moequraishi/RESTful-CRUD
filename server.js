const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors'),
  routes = require('./server/routes/routes'),
  app = express(),
  port = 1337;

app.set('dist', path.join(__dirname, 'dist/restful-crud'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/restful-crud')));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/restful-crud/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
