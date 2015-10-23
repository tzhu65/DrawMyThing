var nano = require('../../util/couchdb');
var Q = require('q');

var checkUserValid = function(username, uniqueId) {
  var deferred = Q.defer();

  var users = nano.use('users');
  users.get(username, {
    uniqueId: uniqueId
  }, function( err, body, header) {
    if (err) {
      deferred.reject(new Error(err));
      return;
    }
    console.log('user has an account');
    console.log(body);
    deferred.resolve(body);
  });
  return deferred.promise;
};

module.exports = checkUserValid;
