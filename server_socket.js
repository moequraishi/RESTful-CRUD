const express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes/socket-routes'),
  port = 1337;

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.set('public', __dirname + '/dist/restful-crud/index.html');
app.use(express.static(__dirname + '/dist/restful-crud'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/restful-crud/index.html');
});

io.on('connection', (socket) => {

  // Log whenever a user connects
  console.log('user connected');

  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('changed', (changed) => {
    console.log('From the server - User updated:', changed.name);

    socket.emit('getall', changed);
  });
});

// Initialize our websocket server on port 1337
http.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
