app = require('express')()
http = require('http').Server(app)
io = require('socket.io')(http)
path = require('path')
app.get '/', (req, res) ->
  express = require('express')
  app.use express.static(path.join(__dirname))
  res.sendFile __dirname + '/index.html'
  return
 io.on 'connection', (socket) ->
  socket.on 'chatMessage', (from, msg) ->
    io.emit 'chatMessage', from, msg
    return
  socket.on 'notifyUser', (user) ->
    io.emit 'notifyUser', user
    return
  return
http.listen 3000, ->
  console.log 'listening on *:3000'
  return
