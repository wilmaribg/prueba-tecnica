var gulp = require('gulp');
var requireDir = require('require-dir');

var dirs = requireDir('./gulp');

gulp.task('dev', ['index', 'views', 'css', 'js', 'startBrowser', 'assets'], function() {
  gulp.watch('./app/index.html',    ['index', 'reload']);
  gulp.watch('./app/**/*.html',  ['views', 'reload']);
  gulp.watch('./app/**/*.js',    ['js', 'reload']);
  gulp.watch('./app/**/*.scss',    ['css', 'reload']);
});
