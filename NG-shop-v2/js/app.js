

(function () { 


    var mod = angular.module('shop', ['jcs-autoValidate']);  
    

    // M --> Model  ( data )
    var items = [{
        id:'1',
        name: 'Laptop',
        price: 10000,
        description: 'new model',
        canBuy: false,
        notAvailable: false,
        make: Date.now(),
        discount: 500,
        images: [{ thumb: '', full: 'images/Laptop.png' }],
        reviews: [{stars:5,author:'nag@gmail.com',comment:'bla bla'},{stars:5,author:'ria@gmail.com',comment:'bla bla'}]
    },
    {
        id:'2',    
        name: 'Mobile',
        price: 5000,
        description: 'new model',
        canBuy: false,
        notAvailable: false,
        make: Date.now(),
        discount: 50,
        images: [{ thumb: '', full: 'images/Mobile.png' }],
        reviews: [{ stars: 5, author: 'nag@gmail.com', comment: 'bla bla' }, { stars: 5, author: 'ria@gmail.com', comment: 'bla bla' }]
    }];

    // Controller

    mod.controller('ShopController', function ($scope) { 
        // provide behav & data to view
        // this.product = item;
        $scope.products = items;   // View-Model

    });

    mod.controller('TabsController', function ($scope) { 
        $scope.tab = 1;  //ng-init="tab=1"
        $scope.changeTab = function (tabIndex) {
             $scope.tab = tabIndex;
        }
        $scope.isTabSelected=function(tabIndex){
             return $scope.tab === tabIndex;
        }
    });

     mod.controller('ReviewFormController', function ($scope) { 
         $scope.review = {author: 'nag@gmail.com', comment: '' };
         $scope.addNewReview = function(product) {
             // send to server...
             product.reviews.push($scope.review);
             $scope.review = { author: 'nag@gmail.com', comment: '' };
             $scope.reviewForm.$setPristine(true);
         }
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



})();