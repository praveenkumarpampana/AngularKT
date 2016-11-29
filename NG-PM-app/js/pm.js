

(function () {

    var mod = angular.module('pm', ['ui.router', 'ngResource']);

    mod.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', { url: "/", templateUrl: 'templates/pm-home.html' })
            .state('all', { url: "/view-all", templateUrl: 'templates/pm-grid.html', controller: 'ViewAllController' })
            .state('new', { url: "/add-new", templateUrl: 'templates/pm-product-form.html', controller: 'AddNewController' })
            .state('all.edit', {
                url: "/edit-item/:prodId",
                views: {
                    'view': { templateUrl: 'templates/pm-product-view.html', controller: 'ViewAndUpdateController' },
                    'edit': { templateUrl: 'templates/pm-product-form.html', controller: 'ViewAndUpdateController' }
                }
            })
            .state('all.view', {
                url: "/view-item/:prodId",
                views: {
                    'view': { templateUrl: 'templates/pm-product-view.html', controller: 'ViewAndUpdateController' }
                }
            })

    });

    mod.controller('ViewAllController', function ($scope, Product, $state) {
        Product.query(function (items) {
            $scope.products = items;
        });
        $scope.delete = function (pid) {
            Product.delete({ id: pid }, function (product) {
                //console.log('product deleted....');
                $state.reload();
            });
        };
    });
    mod.controller('AddNewController', function ($scope, Product, $location, $state) {
        $scope.product = {};
        $scope.save = function () {
            var newProduct = new Product();
            angular.extend(newProduct, $scope.product, { make: Date.now() });
            newProduct.$save(function (product) {
                //console.log('product saved...');
                //console.dir(product);
                //$location.path('view-all');
                $state.go('all');
            });
        }
    });

    mod.controller('ViewAndUpdateController', function ($scope, Product, $location, $state, $stateParams) {

        if ($stateParams.prodId) {
            Product.get({ id: $stateParams.prodId }, function (item) {
                $scope.product = item;
            })
        }

        $scope.save = function () {
            Product.update($scope.product, function (product) {
                $state.go('all');
            });
        }
    });

    mod.factory('Product', function ($resource) {
        var api = "http://localhost:3000/api/products/:id";
        var Product = $resource(api, { id: '@id' }, { 'update': { method: 'PUT' } });
        return Product;
    });

} ());