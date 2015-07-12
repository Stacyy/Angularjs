angular.module('myApp')
.controller('clientController', function($scope){
    $scope.customText = "Customer:";

    $scope.customer = [{
        name: "mr.Barboss",
        city: "Los-Altos",
        age: 4,
        avatar: 'http://storage3.static.itmages.ru/i/15/0711/h_1436614335_2408311_edf46a88e6.jpeg'
    }, {
        name: "James B..",
        city: "London",
        age: 6,
        avatar: 'http://storage3.static.itmages.ru/i/15/0711/h_1436614336_9216483_cbe0b7ec10.jpeg'
    }, {
        name: "ms.Burbella",
        city: "Rio-de-Janeiro",
        age: 3,
        avatar: 'http://storage1.static.itmages.ru/i/15/0711/h_1436614336_8219552_47b6490204.jpeg'
    }, {
        name: "mr.Sherlock Holmes",
        city: "London",
        age: 8,
        avatar: 'http://storage1.static.itmages.ru/i/15/0711/h_1436614336_9250994_0a1a6ac50f.jpeg'
    }, {
        name: "Ornella",
        city: "Roma",
        age: 6,
        avatar: 'http://storage3.static.itmages.ru/i/15/0711/h_1436614335_1296872_b3074f41b2.jpeg'
    }, {
        name: "mr.Whaaat",
        city: "Boston",
        age: 5,
        avatar: 'http://storage2.static.itmages.ru/i/15/0711/h_1436614335_9313785_a5e6986244.jpeg'
    }, {
        name: "Sunny Boy",
        city: "Palm Springs",
        age: 2,
        avatar: 'http://storage2.static.itmages.ru/i/15/0711/h_1436614335_4914253_0fbaa8eae3.jpeg'
    }];

    $scope.deleteEl = function (client) {
        var ind = $scope.customer.indexOf(client);
        $scope.customer.splice(ind, 1);
    }

    $scope.create = function () {
        if ($scope.newCustom) {
            $scope.customer.push($scope.newCustom);
            $scope.newCustom = null;
        }
    }
    $scope.toggleCustomers = function () {
        $scope.showCustom = $scope.showCustom ? false : true;

    }
	
});