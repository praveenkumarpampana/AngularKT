/**
 * http://usejsdoc.org/
 */

(function() {
	var mod = angular.module('pm', []);
	mod.controller('ProductsController', function($scope, $http) {
		$scope.loadProducts = function() {
			$http.get("/products").then(function(resp) {
				$scope.products = resp.data;
			}, function(reason) {
				$scope.message = reason;
			});
		};

	});
})();