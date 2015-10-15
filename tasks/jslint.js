var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lintjs', function() {
  return gulp.src(['./*.js',
    './bin/**.js',
    './routes/**.js',
    './tasks/**.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
