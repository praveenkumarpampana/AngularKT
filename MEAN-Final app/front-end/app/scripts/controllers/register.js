'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the ngAppApp
 */
angular.module('ngApp')
  .controller('RegisterCtrl', function ($scope, API_URL, $http, alert, authToken) {

    $scope.email = "nag@gmail.com";

    $scope.submit = function () {

      var user = { email: $scope.email, password: $scope.password };

      $http.post(API_URL + "/users/register", user)
        .success(function (res) {
          alert('success', 'Account Created', 'Welome ' + res.user.email);
          authToken.setToken(res.token);
        })
        .error(function (err) {
          alert('warning', 'oops', 'could not registred');
        });
    }


  });
