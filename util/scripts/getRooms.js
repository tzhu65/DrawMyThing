var Q = require('q');
var async = require('async');
var nano = require('../couchdb');
var log = require('../logger');
var filePath = '/util/scripts/getRoom.js';

var getRooms = function(roomName, roomSize, uniqueId) {
  var deferred = Q.defer();
  var rooms = nano.use('rooms');

  rooms.view('rooms', 'listAll', {descending: true}, function(err, body) {
    if (err) {
      log.error('Error in getting all the rooms', {filePath: filePath, err: err});
      deferred.reject(new Error(err));
    }

    var roomInfo = [];
    async.each(body.rows,
      function(doc, cb) {
        roomInfo.push(doc.value);
        cb();
      }, function(err) {
        if (err) {
          log.error('Error in processing all the rooms', {filePath: filePath, err: err});
          deferred.reject(new Error(err));
        }
        log.info('Successfully got all rooms', {filePath: filePath});
        deferred.resolve(roomInfo);
      }
    );
  });
  return deferred.promise;
};

module.exports = getRooms;
