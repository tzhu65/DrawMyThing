var crypto = require('crypto');
var express = require('express');
var router = express.Router();

var log = require('../util/logger');
var createRoom = require('../util/scripts/createRoom');
var getRooms = require('../util/scripts/getRooms');

var filePath = '/routes/rooms.js';

/* GET rooms listing */
router.get('/', function(req, res, next) {

  getRooms().then(function(rooms) {
    log.info('Successful GET /rooms request', {filePath: filePath});
    response = {
      status: '201',
      message: 'list of active rooms',
      code: '14',
      rooms: rooms
    };
    console.log(rooms);
    res.send(response);
  }, function(err) {
    log.error('Error in GET /rooms request', {filePath: filePath, err: err});
    response = {
      status: '409',
      message: 'error in retrieving active rooms',
      code: '15'
    };
    res.send(response);
  });
});

/* POST a new room */
router.post('/', function(req, res, next) {
  var roomName = req.body.roomName;
  var roomSize = req.body.roomSize;
  var uniqueId = crypto.randomBytes(20).toString('hex');
  var roomOwner = req.cookies.username;

  console.log(roomName);
  console.log(roomSize);
  console.log(uniqueId);

  var response;
  createRoom(roomName, roomSize, uniqueId, roomOwner).then(function(body) {
    log.info('Successful POST /rooms request', {filePath: filePath, body: body});
    response = {
      status: '201',
      message: 'room created',
      code: '12',
      roomName: roomName,
      uniqueId: uniqueId
    };
    res.send(response);
  }, function(err) {
    log.error('Error in POST / rooms request', {filePath: filePath, err: err});
    response = {
      status: '409',
      message: 'room already exists',
      code: '13'
    };
    res.send(response);
  });
});

// Starting the game call
router.post('/*/startGame', function(req, res, next) {
  res.send('success');

});

module.exports = router;
