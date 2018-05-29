var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
// Initialize appication with route / (that means root of the application)
app.get('/', function(req, res){
var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(__dirname + '/index.html');
 });
 /*
 // Initialize appication with route / (that means root of the application)
app.get('/', function(req, res){
var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(__dirname + '/index.html');
 });
 
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});
*/
  //Register events on socket connection
 io.on('connection', function(socket){
     
 socket.on('chatMessage', function(from, msg){
 io.emit('chatMessage', from, msg);
});

socket.on('notifyUser', function(user){
io.emit('notifyUser', user);
});
});
//Listen application request on port 3000
 http.listen(3000, function(){
  console.log('listening on *:3000');
});
