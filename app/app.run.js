( function () {

  'use strict';

  angular
    .module( 'app' )
    .run( appRun );

  function appRun ( $http, $templateCache ) {
    'ngInject';
  }

} )();
