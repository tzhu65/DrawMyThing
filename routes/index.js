var express = require('express');
var router = express.Router();

var log = require('../util/logger');
var checkUserValid = require('../util/scripts/checkUserValid');

var filePath = '/routes/index.js';

router.get('/hey', function(Req, res, next) {
  res.send('hey there');
});

/* GET home page */
router.get('/', function(req, res, next) {
  var username = req.cookies.username;
  var uniqueId = req.cookies.uniqueId;
  log.info('GET / request', {filePath: filePath, cookies: req.cookies});

  // Go direclty in game if the user is valid
  if (username && uniqueId) {

    checkUserValid(username, uniqueId).then(function(body) {
      res.render('index',
      {
        title: 'Draw My Thing',
        newUser: false
      });
    }, function(err) {

      res.cookie('username', '', {httpOnly: true});
      res.cookie('uniqueId', '', {httpOnly: true});

      // User is not valid so return the login page
      res.render('index',
      {
        title: 'Draw My Thing',
        newUser: true
      });
    });
  } else {

    res.cookie('username', '', {httpOnly: true});
    res.cookie('uniqueId', '', {httpOnly: true});

    res.render('index',
    {
      title: 'Draw My Thing',
      newUser: true
    });
  }
});

module.exports = router;
