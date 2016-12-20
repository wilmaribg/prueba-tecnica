( function () {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'appWarehouseRegister', appWarehouseRegister );

  function appWarehouseRegister () {
    'ngInject';

    var directive = {
      restrict: 'EA',
      controllerAs: 'vm',
      scope: { data: '=data' },
      templateUrl: 'views/components/warehouse/warehouse-register.directive.html',
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

      function getModel () {
        return {
          name: '',
          nit: ''
        }
      }

      function create () {
        if (vm.model.name != '' && vm.model.nit != '') {
          if( vm.action === 'create' ) {
            createF ();
            return 'create';
          }else {
            updateF();
            return 'update';
          }
        } else {
            toastr.error( 'Faltan campos obligatorios', 'Error!');
        }
      }

      function createF () {
        firebaseConnect.push( 'warehouse', vm.model, function ( resp ) {
          if( resp === 'ok' ) {
            toastr.success( 'Almacén creado.', 'Proceso Exitoso!');
          } else {
            toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
          }
        } );
        vm.model = getModel();
      }

      function updateF() {
        firebaseConnect.update( 'warehouse', $scope.data.key, vm.model, function ( resp ) {
          if( resp === 'ok') {
            toastr.success( 'Almacén editado.', 'Proceso Exitoso!');
          } else {
            toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
          }
        } );
        $scope.data = {};
      }
    };

  }

} )();
