var gulp = require('gulp');
var browser = require('browser-sync');

gulp.task('index', [], function() {
  gulp.src('./app/index.html')
  .pipe(gulp.dest('./build'))
  .pipe(browser.stream())
});
