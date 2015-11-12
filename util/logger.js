var winston = require('winston');

var fileDebugTransport = new (winston.transports.File)({
  name: 'debug-file',
  filename: 'filelog-debug.log',
  level: 'debug'
});

var fileInfoTransport = new (winston.transports.File)({
  name: 'info-file',
  filename: 'filelog-info.log',
  level: 'info',
  json: false,
  prettyPrint: true
});

var fileErrorTransport = new (winston.transports.File)({
  name: 'error-file',
  filename: 'filelog-error.log',
  level: 'error'
});

var consoleTransport = new (winston.transports.Console)({
  name: 'console',
  level: 'debug',
  timestamp: true
});

var logger = new (winston.Logger)({
  transports: [
    // Add any transports here
    consoleTransport
  ]
});

module.exports = logger;
