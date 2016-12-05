
angular
    .module('ngApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push('authInterceptor');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', { url: "/", templateUrl: 'views/main.html' })
            // .state('login', { url: "/login", templateUrl: 'views/login.html' })
            .state('register', { url: "/register", templateUrl: 'views/register.html', controller: 'RegisterCtrl' })
            .state('logout', { url: "/logout", controller: 'LogoutCtrl' })
            .state('products', { url: "/products", templateUrl: 'views/products.html', controller: 'ProductsCtrl' })
            .state('login', { url: "/login", templateUrl: 'views/login.html', controller: 'LoginCtrl' })


    })
    .run(function($window) {
        var params = $window.location.search.substring(1);

        if (params && $window.opener && $window.opener.location.origin === $window.location.origin) {
            var pair = params.split('=');
            var code = decodeURIComponent(pair[1]);

            $window.opener.postMessage(code, $window.location.origin);
        }
    })
    .constant('API_URL', "http://localhost:3000/");
;

