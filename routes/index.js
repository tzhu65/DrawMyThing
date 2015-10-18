var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('username', 'cookievalue', { maxAge: 900000, httpOnly: true });
  console.log("Cookies: ", req.cookies);

  res.render('layout', { title: 'Draw My Thing' });
});

module.exports = router;
