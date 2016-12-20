( function () {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'appBuyerRegister', appBuyerRegister );


  function appBuyerRegister () {
    'ngInject';

    var directive = {
      restrict: 'EA',
      templateUrl: 'views/components/buyer/buyer-register.directive.html',
      scope: { data: '=data' },
      controllerAs: 'vm',
      controller: directiveController
    };
    return directive;

    function directiveController ( firebaseConnect, toastr,  $scope ) {
      'ngInject';

      var vm = this;
      vm.ref = {};
      vm.action = 'create';
      vm.create = create;

      if( $scope.data != null) {
        if( Object.keys( $scope.data ).length > 2 ) {
          vm.model = $scope.data.values;
          vm.action = 'update';
        }
      } else {
        vm.model = getModel();
      }

      function getModel() {
        return {
          name: '',
          email: '',
          usename: '',
        }
      }

      function create () {
        if (vm.model.name != '' && vm.model.username != '' && vm.model.email != '') {
          if( vm.action === 'create' ) {
            createF ()
          }else {
            updateF()
          }
        } else {
            toastr.error( 'Faltan campos obligatorios', 'Error!');
        }
      }

      function createF () {
        firebaseConnect.push( 'buyer', vm.model, function ( resp ) {
          if( resp === 'ok' ) {
            toastr.success( 'Personas creadoa', 'Proceso Exitoso!');
          } else {
            toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
          }
        } );
        vm.model = getModel();
      }

      function updateF() {
        firebaseConnect.update( 'buyer', $scope.data.key, vm.model, function ( resp ) {
          if( resp === 'ok') {
            toastr.success( 'Personas editada.', 'Proceso Exitoso!');
          } else {
            toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
          }
        } );
        $scope.data = {};
      }

    }

  }

} )();
