var gulp = require( 'gulp' ),
    browser = require( 'browser-sync' );

gulp.task('views', [], function() {
  gulp.src('./app/**/*.html')
  .pipe(gulp.dest('./build/views'))
  .pipe(browser.stream())
});
