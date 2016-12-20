( function () {

  'use strict';

  require('angular');
  require('firebase');
  require('angularfire');
  require('angular-toastr');
  require('angular-ui-router');
  require('./templates.module.js');
  require('./app.module.js');
  require('./layout/list.controller.js');
  require('./components/buyer/buyer-register.directive.js');
  require('./components/buyer/buyer.directive.js');
  require('./components/warehouse/warehouse.directive.js');
  require('./components/warehouse/warehouse-register.directive.js');
  require('./components/menu/menu.directive.js');
  require('./services/firebase.js');
  require('./app.config.js');
  require('./app.run.js');
  require('./app.bootstrap.js');

} )();
