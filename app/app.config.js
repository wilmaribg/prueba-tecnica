( function () {

  'use strict';

  angular
  .module( 'app' )
  .config( appConfig );

  function appConfig ( $stateProvider, $locationProvider, $urlRouterProvider, toastrConfig ) {
    'ngInject';

    var home = {
      name: 'Home',
      url: '/home',
      templateUrl: 'views/layout/home.html'
    };

    var lists = {
      name: 'Listas',
      url: '/listados',
      controller: 'listController',
      controllerAs: 'list',
      templateUrl: 'views/layout/lists.html'
    };

    var buyer_register = {
      name: 'Registro Personas',
      url: '/registro-persona',
      template: '<app-buyer-register></app-buyer-register>'
    };

    var warehause_register = {
      name: 'Regitro Tiendas',
      url: '/registro-alamcen',
      template: '<app-warehouse-register></app-warehouse-register>'
    };

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state( 'home', home );
    $stateProvider.state( 'lists', lists );
    $stateProvider.state( 'buyer_register', buyer_register );
    $stateProvider.state( 'warehause_register', warehause_register );

    $locationProvider.html5Mode(true);
  }

} )();
