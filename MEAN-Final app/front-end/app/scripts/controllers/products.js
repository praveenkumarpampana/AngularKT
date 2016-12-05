'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the ngAppApp
 */
angular.module('ngApp')
  .controller('ProductsCtrl', function ($scope, $http, API_URL, alert) {

    $http.get(API_URL + "products")
      .success(function (products) {
        $scope.products = products;
      })
      .error(function (err) {
        alert('warning', 'unable to products', err.message);
      });

  });
