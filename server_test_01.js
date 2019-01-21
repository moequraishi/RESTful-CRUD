const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes/routes'),
  app = express(),
  port = 1337;

app.set('dist',__dirname + '/dist/restful-crud');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/restful-crud')));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/restful-crud/index.html');
});

app.listen(port, () => console.log(`Listening on port: ${port}`) );
