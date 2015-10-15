var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var tasks = requireDir('./tasks');

gulp.task('default', function() {
  runSequence('react-render',
              'nodemon'
            );
});
