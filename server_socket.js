const express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes/routes'),
  port = 1337;

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.set('public', __dirname + '/dist/restful-crud/index.html');
app.use(express.static(__dirname + '/dist/restful-crud'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

io.on('connection', (socket) => {

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/restful-crud/index.html');
  });

  // Log whenever a user connects
  console.log('user connected');

  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on('get-all', (data) => {
    app.get('/users', (res, req) => {
      console.log("got all test data: " + res);
      res.status(200).json();
    });
  });
});

// Initialize our websocket server on port 5000
http.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
