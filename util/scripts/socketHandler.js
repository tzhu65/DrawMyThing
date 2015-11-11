var cookieParser = require('socket.io-cookie-parser');
var log = require('../logger');

var gameSockets = require('./gameSockets');

var setUpSockets = function(server) {

  var io = require('socket.io')(server);
  io.use(cookieParser());

  io.on('connection', function (socket) {
    console.log('connected?');

    gameSockets.turnOn(socket, io);

    // Subscribe to a room
    socket.on('join room', function(data) {
      socket.join(data.roomId);
      console.log('socket joined the room: ' + data.roomId);
      io.to(data.roomId).emit('message', {username: 'yahello', msg: 'el oh el'});
    });

    // Message a room
    socket.on('message room', function(data) {
      console.log('messaging the room: ' + data.roomId);
      var username = data.username;
      if (!username) {
        username = socket.request.cookies.username;
      }
      console.log('username: ' + username);
      console.log('message: ' + data.msg);
      io.to(data.roomId).emit('message', { username: username, msg: data.msg });
    });

    // Message a game room
    socket.on('message game-room', function(data) {
      console.log('messaging the room: ' + data.roomId);
      var username = data.username;
      if (!username) {
        username = socket.request.cookies.username;
      }
      console.log('username: ' + username);
      console.log('message: ' + data.msg);
      io.to(data.roomId).emit('message game', { username: username, msg: data.msg });
    });

    // Send messages to other users
    socket.on('message', function(data) {
      var username;
      if (socket.request.cookies.username) {
        username = socket.request.cookies.username;
      } else {
        username = data.username;
      }
      io.emit('message', {username: username, msg: data.msg});
    });

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });
  });
};

module.exports = setUpSockets;
