var Q = require('q');
var nano = require('../couchdb');
var log = require('../logger');
var filePath = '/util/scripts/createUser.js';

var createUser = function(username, uniqueId) {
  var deferred = Q.defer();
  var users = nano.use('users');

  users.insert({
    username: username,
    uniqueId: uniqueId
  }, username, function(err, body, header) {

    if (err) {
      log.error('Error in creating user', {filePath: filePath, err: err});
      deferred.reject(new Error(err));
    }
    log.info('User has been created', {filePath: filePath, username: username, uniqueId: uniqueId, body: body});
    deferred.resolve(body);
  });

  return deferred.promise;
};

module.exports = createUser;
