var express = require('express');
var router = express.Router();
var logger = require('../util/logger');
var createUser = require('../util/scripts/createUser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  createUser(username).then(function(body) {
    console.log('it worked...');
    res.send('pass');
  }, function(err) {
    console.log('it failed...');
    res.send('fail');
  });
});

module.exports = router;
