var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var logger = require('../util/logger');
var createUser = require('../util/scripts/createUser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

  var username = req.body.username;
  var uniqueId = crypto.randomBytes(20).toString('hex');

  var response;
  createUser(username, uniqueId).then(function(body) {
    response = {
      status: '201',
      message: 'username created',
      code: '10'
    };
    res.cookie('username', username, {httpOnly: true});
    res.cookie('uniqueId', uniqueId, {httpOnly: true});
    res.send(response);
  }, function(err) {
    response = {
      status: '409',
      message: 'username already exists',
      code: '11'
    };
    res.send(response);
  });
});

module.exports = router;
