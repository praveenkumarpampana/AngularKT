'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ngAppApp
 */
angular.module('ngApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = function () {
      return authToken.isAuthenticated();
    }
  });
