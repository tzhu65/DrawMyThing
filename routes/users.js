var crypto = require('crypto');
var express = require('express');
var router = express.Router();

var log = require('../util/logger');
var createUser = require('../util/scripts/createUser');

var filePath = '/routes/users.js';

/* GET users listing */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing */
router.post('/', function(req, res, next) {

  // Create a new user
  var username = req.body.username;
  var uniqueId = crypto.randomBytes(20).toString('hex');
  var response;

  createUser(username, uniqueId).then(function(body) {

    log.info('Successful POST /users request', {filePath: filePath, body: body});
    response = {
      status: '201',
      message: 'username created',
      code: '10',
      username: username,
      uniqueId: uniqueId
    };

    // Generate cookie for new user
    res.cookie('username', username, {httpOnly: true});
    res.cookie('uniqueId', uniqueId, {httpOnly: true});
    res.send(response);
  }, function(err) {
    log.error('Error in POST /users request', {filePath: filePath, err: err});
    response = {
      status: '409',
      message: 'username already exists',
      code: '11'
    };
    res.send(response);
  });
});

module.exports = router;
