var Q = require('q');
var nano = require('../couchdb');
var log = require('../logger');
var filePath = '/util/scripts/createRoom.js';

var createRoom = function(roomName, roomSize, uniqueId, roomOwner) {
  var deferred = Q.defer();
  var rooms = nano.use('rooms');
  var timeStamp = Date.now();

  rooms.insert({
    roomName: roomName,
    roomSize: roomSize,
    uniqueId: uniqueId,
    roomOwner: roomOwner,
    timeStamp: timeStamp
  }, roomName, function(err, body, header) {

    if (err) {
      log.error('Error in creating room', {filePath: filePath, err: err});
      deferred.reject(new Error(err));
    }
    log.info('Room sucessfully created', {filePath: filePath, body: body});
    deferred.resolve(body);
  });

  return deferred.promise;
};

module.exports = createRoom;
