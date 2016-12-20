var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    browser = require('browser-sync');


gulp.task('css', [], function() {
    gulp.src('./app/**/*.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browser.stream())
});
