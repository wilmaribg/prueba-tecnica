var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    annotate = require('gulp-ng-annotate'),
    browser = require('browser-sync'),
    concat = require('gulp-concat');


gulp.task('js', [ ], function() {
    gulp.src('./app/index.js')
    .pipe(browserify({
       insertGlobals : true
    }))
    .pipe(annotate())
    .pipe( concat( 'index.js' ) )
    .pipe(gulp.dest('./build/js'))
    .pipe(browser.stream())
});
