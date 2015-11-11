var cookieParser = require('socket.io-cookie-parser');
var log = require('../logger');

var gameSockets = {}

gameSockets.turnOn = function(socket, io) {

  // Drawing
  socket.on('mousedown', function(data) {
    console.log('m');
    console.log(data.m);
    console.log('hey that mouse down');
    io.to(data.roomId).emit('mousedown', data);
  });

  socket.on('mousemove', function(data) {
    console.log(data.m);
    console.log('hey that mouse move');
    io.to(data.roomId).emit('mousemove', data);
  });
};

gameSockets.turnOff = function() {

};

module.exports = gameSockets;
