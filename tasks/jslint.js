var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lintjs', function() {
  return gulp.src([
    '!./node_modules',
    '!./node_modules/**',
    '!./public/javascripts/build/**',
    '!./public/libraries/**',
    '**/*.js'
  ], {matchBase: true})
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
