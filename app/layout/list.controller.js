( function () {

  'use strict';

  angular
    .module( 'app' )
    .controller('listController', listController);

  function listController ( firebaseConnect ) {
    'ngInject';

    var vm = this;

    vm.list = 'warehouse';
    vm.setTab = setTab;

    function setTab ( name ) {
      vm.list = name;
    }
  }

} )();
