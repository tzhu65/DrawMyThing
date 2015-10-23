var nano = require('../../util/couchdb');
var Q = require('q');

var createUser = function(username, uniqueId) {
  var deferred = Q.defer();

  var users = nano.use('users');
  users.insert({
    username: username,
    uniqueId: uniqueId
  }, username, function( err, body, header) {
    if (err) {
      deferred.reject(new Error(err));
      return;
    }
    console.log('document has been inserted.');
    console.log(body);
    deferred.resolve(body);
  });
  return deferred.promise;
};

module.exports = createUser;
