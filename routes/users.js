var express = require('express');
var router = express.Router();
var logger = require('../util/logger');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  logger.info(req.body.username);
  res.send('respond with a resource');
});

module.exports = router;
