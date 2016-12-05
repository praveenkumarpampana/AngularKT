'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ngAppApp
 */
angular.module('ngApp')
  .controller('LogoutCtrl', function ($scope,authToken,$state) {
    authToken.removeToken();
    $state.go('main');
  });
