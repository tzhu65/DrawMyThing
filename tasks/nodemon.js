var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: 'bin/www',
    tasks: ['react-render', 'sass'],
    ext: 'html js jsx jade scss',
    env: { 'NODE_ENV': 'development' },
    ignore: [
              'public/javascripts/build',
              'node_modules'
           ],
  });
});
