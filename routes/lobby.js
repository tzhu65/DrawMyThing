var express = require('express');
var router = express.Router();

var log = require('../util/logger');

var filePath = '/routes/lobby.js';

/* GET or join a lobby listing */
router.get('/*', function(req, res, next) {
  res.send('hello world: ' + req.url);
});


module.exports = router;
