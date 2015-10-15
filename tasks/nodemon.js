var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: 'bin/www',
    tasks: ['react-render'],
    ext: 'html js jsx',
    env: { 'NODE_ENV': 'development' },
    ignore: [
              'public/javascripts/build'
           ],
  });
});
