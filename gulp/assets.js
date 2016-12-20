'use strict';

var gulp =  require( 'gulp' ),
    image = require( 'gulp-image' );

gulp.task( 'assets', [], compress );

function compress() {
  gulp.src( './app/assets/**/*' )
  .pipe( image() )
  .pipe( gulp.dest( './build/assets' ) );
}
