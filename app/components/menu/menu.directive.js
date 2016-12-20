( function () {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'appMenu', appMenu );


  function appMenu () {
    'ngInject';

    var directive = {
      restrict: 'EA',
      templateUrl: 'views/components/menu/menu.directive.html'
    };
    return directive;
  }

} )();
