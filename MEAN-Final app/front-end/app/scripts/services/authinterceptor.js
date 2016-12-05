'use strict';

/**
 * @ngdoc service
 * @name ngAppApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the ngAppApp.
 */
angular.module('ngApp')
  .factory('authInterceptor', function (authToken) {
    return {
      request: function (config) {
        var token = authToken.getToken();

        if (token)
          config.headers.Authorization = 'Bearer ' + token;

        return config;
      },
      response: function (response) {
        return response;
      }
    };
  });
