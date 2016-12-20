( function () {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'appWarehouse', appWarehouse );

  function appWarehouse () {
    'ngInject';

    var directive = {
      restrict: 'EA',
      templateUrl: 'views/components/warehouse/warehouse.directive.html',
      controllerAs: 'mv',
      controller: directiveController
    };

    return directive;

    function directiveController ( firebaseConnect ) {
      'ngInject';

      var mv = this;

      mv.warehouses = [];
      mv.edit = {};
      mv.query = { initFrom: 0 };
      mv.btnMore = true;
      mv.getData = getData;
      mv.setEdit = setEdit;
      mv.delete = remove;

      mv.getData();

      function getData () {
        firebaseConnect.getAll( 'warehouse', 100, function(data) {
          if( data ) {
            mv.warehouses = data;
            mv.query.initFrom = data.length;
          }else {
            mv.btnMore = false;
          }
        } );
      }

      function remove ( key ) {
        $ngBootbox.confirm( "Seguro de eliminar este elemento" ).then( function (result) {
          firebase.remove( 'warehouse', key, function () {
            if( resp === 'ok' ) {
              toastr.success( 'Almacén eliminado.', 'Proceso Exitoso!');
            } else {
              toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
            }
          } );
        } );
      }

      function setEdit ( index ) {
        mv.edit = mv.warehouses[index];
      }

    }

  }

} )();
