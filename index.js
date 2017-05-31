var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  /***
   * Handle the 'test' event from the client
   */
  socket.on('test', function (msg) {
    console.log(msg);
  });
  
  /***
   * The client disconnects
   */
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});