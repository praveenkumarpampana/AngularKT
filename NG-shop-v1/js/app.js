

(function () { 


    var mod = angular.module('shop', []);  
    

    // M --> Model  ( data )
    var items = [{
        name: 'Laptop',
        price: 10000,
        description: 'new model',
        canBuy: false,
        notAvailable: false,
        make: Date.now(),
        discount: 500,
        images: [{thumb:'',full:'images/Laptop.png'}]
    },
    {
        name: 'Mobile',
        price: 5000,
        description: 'new model',
        canBuy: false,
        notAvailable: false,
        make: Date.now(),
        discount: 50,
        images: [{thumb:'',full:'images/Mobile.png'}]
    }];

    // Controller

    mod.controller('ShopController', function ($scope) { 
        // provide behav & data to view
        
        // this.product = item;
        $scope.products = items;   // View-Model

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