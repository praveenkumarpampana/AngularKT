'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngAppApp
 */
angular.module('ngApp')
    .controller('LoginCtrl', function ($scope, $http, API_URL, alert, authToken, $state, $window, $q) {

        $scope.email = "nag@gmail.com";
        $scope.submit = function () {
            var url = 'http://localhost:3000/users';
            var user = { email: $scope.email, password: $scope.password };
            $http.post(API_URL + "users/login", user)
                .success(function (res) {
                    alert('success', 'Welcome', 'Thanks for coming back  ' + res.user.email);
                    authToken.setToken(res.token);
                    $state.go('main');
                })
                .error(function (err) {
                    alert('warning', 'oops', 'Something went wrong ' + err.message);
                });
        };


    });
