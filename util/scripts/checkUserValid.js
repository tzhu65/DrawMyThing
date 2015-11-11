var Q = require('q');
var nano = require('../couchdb');
var log = require('../logger');
var filePath = '/util/scripts/checkUserValid.js';

var checkUserValid = function(username, uniqueId) {
  var deferred = Q.defer();
  var users = nano.use('users');

  users.get(username, { uniqueId: uniqueId}, function( err, body, header) {
    if (err) {
      log.info('User is not valid', {filePath: filePath, username: username, uniqueId: uniqueId, err: err});
      deferred.reject(new Error(err));
    }
    log.info('User has an account', {filePath: filePath, username: username, uniqueId: uniqueId, body: body});
    deferred.resolve(body);
  });

  return deferred.promise;
};

module.exports = checkUserValid;
