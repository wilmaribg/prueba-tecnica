var gulp = require('gulp'),
    browser = require('browser-sync');

gulp.task('startBrowser', [], function() {
  browser.create();
  browser.init({
    server:{
      baseDir: './build'
    }
  });
});

gulp.task('reload', function() {
  browser.reload();
});
