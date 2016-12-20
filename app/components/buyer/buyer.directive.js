( function () {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'appBuyer', appBuyer );

  function appBuyer () {
    'ngInject';

    var directive = {
      restrict: 'EA',
      templateUrl: 'views/components/buyer/buyer.directive.html',
      controllerAs: 'mv',
      controller: directiveController
    };

    return directive;

    function directiveController ( firebaseConnect ) {
      'ngInject';

      var mv = this;

      mv.buyers = [];
      mv.edit = {};
      mv.query = { initFrom: 0 };
      mv.btnMore = true;
      mv.getData = getData;
      mv.setEdit = setEdit;
      mv.delete = remove;

      mv.getData();

      function getData () {
        firebaseConnect.getAll( 'buyer', 100, function(data) {
          if( data ) {
            mv.buyers = data;
            mv.query.initFrom = data.length;
          }else {
            mv.btnMore = false;
          }
        } );
      }

      function remove ( key ) {
        $ngBootbox.confirm( "Seguro de eliminar este elemento" ).then( function (result) {
          firebase.remove( 'buyer', key, function () {
            if( resp === 'ok' ) {
              toastr.success( 'Almacén eliminado.', 'Proceso Exitoso!');
            } else {
              toastr.error( 'Ops! tu solicitud no pudo ser procesada', 'Error!');
            }
          } );
        } );
      }

      function setEdit ( index ) {
        mv.edit = mv.buyers[index];
      }

    }

  }

} )();
