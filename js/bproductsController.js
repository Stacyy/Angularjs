angular.module('myApp')
.controller('productsController', function($scope) {
    $scope.products = [{
        title: 'Milk',
        price: 8.50
    }, {
        title: 'Beef',
        price: 75.00
    }, {
        title: 'Chicken',
        price: 45.00
    }, {
        title: 'Cake',
        price: 20.00
    }, {
        title: 'Cheese',
        price: 88.00
    }, {
        title: 'Fish',
        price: 56.80
    }];

    $scope.create = function () {
        if ($scope.newProd) {
            $scope.products.push($scope.newProd);
            $scope.newProd = null;
        }
    }
    $scope.toggleProducts = function () {
        $scope.showProd = $scope.showProd ? false : true;
    }
	

});