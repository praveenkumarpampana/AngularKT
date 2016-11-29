

(function () {


    var mod = angular.module('shop', ['jcs-autoValidate']);


    // // M --> Model  ( data )
    // var items = [{
    //     id: '1',
    //     name: 'Laptop',
    //     price: 10000,
    //     description: 'new model',
    //     canBuy: true,
    //     notAvailable: false,
    //     make: Date.now(),
    //     discount: 500,
    //     images: [{ thumb: '', full: 'images/Laptop.png' }],
    //     reviews: [{ stars: 5, author: 'nag@gmail.com', comment: 'bla bla' }, { stars: 5, author: 'ria@gmail.com', comment: 'bla bla' }]
    // },
    // {
    //     id: '2',
    //     name: 'Mobile',
    //     price: 5000,
    //     description: 'new model',
    //     canBuy: true,
    //     notAvailable: false,
    //     make: Date.now(),
    //     discount: 50,
    //     images: [{ thumb: '', full: 'images/Mobile.png' }],
    //     reviews: [{ stars: 5, author: 'nag@gmail.com', comment: 'bla bla' }, { stars: 5, author: 'ria@gmail.com', comment: 'bla bla' }]
    // }];


    // Services

    mod.factory('productService', function ($q, $http) {
        
        var api = "http://0.0.0.0:3000/api/products";

        return {
            loadAll: function () {
                //....
                var deferred = $q.defer();

                // setTimeout(function () {
                //     deferred.resolve([{name:'A'}, {name:'B'}]);
                //     //deferred.reject('load failed..');
                // }, 5000);
                
                // setTimeout(function () {
                //     deferred.notify('still loading....');
                // }, 2000);

                var promise = $http.get(api);
                promise.then(function (resp) { 
                    deferred.resolve(resp.data);
                }, function (error) {
                    deferred.reject(error);
                 });

                return deferred.promise;
            }
        };
    });


    // Controller

    mod.controller('ShopController', function ($scope, productService) {
   
        productService.loadAll()
            .then(function (items) {
                $scope.products = items;
                $scope.message = '';
            }, function (error) {
                $scope.message = error;
            }, function (progress) {
                $scope.message = progress;
            });

    });



    // Filters
    mod.filter('priceDiscount', function () {
        return function (price, discount) {
            if (angular.isNumber(price)) {
                return discount ? price - discount : price - 1;
            } else {
                return price;
            }
        }
    });

    // Directives
    mod.directive('productTitle', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/product-title.html',
            link: function (scope, element, attrs) {
                element.on('mouseenter', function (e) {
                    element.css('background-color', '#def');
                });
                element.on('mouseleave', function (e) {
                    element.css('background-color', '#fff');
                });
            }
        };
    });
    mod.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function ($scope) {
                $scope.tab = 1;  //ng-init="tab=1"
                $scope.changeTab = function (tabIndex) {
                    $scope.tab = tabIndex;
                }
                $scope.isTabSelected = function (tabIndex) {
                    return $scope.tab === tabIndex;
                }
                this.addNewReview = function (product, review) {
                    product.reviews.push(review);
                }
            }
        };
    });
    mod.directive('productReviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html',
            require: '^productTabs',
            link: function (scope, elemnt, attrs, controller) {
                scope.review = {};
                scope.addNewReview = function (product) {
                    controller.addNewReview(product, scope.review);
                    scope.review = {};
                    scope.reviewForm.$setPristine(true);
                }
            }
        };
    });



})();