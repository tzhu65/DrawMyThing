var express = require('express');
var router = express.Router();

var checkUserValid = require('../util/scripts/checkUserValid');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Cookies: ", req.cookies);
  var username = req.cookies.username;
  var uniqueId = req.cookies.uniqueId;

  if (username && uniqueId) {
    checkUserValid(username, uniqueId).then(function(body) {
      res.render('index',
      {
        title: 'Draw My Thing',
        newUser: false
      });
    }, function(err) {
      res.render('index',
      {
        title: 'Draw My Thing',
        newUser: true
      });
    });
  } else {
    res.render('index',
    {
      title: 'Draw My Thing',
      newUser: true
    });
  }

});

module.exports = router;
