//2015-06-28 16:43
var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        }).
        otherwise({redirectTo: '/main'})
}])

.controller('MainCtrl', ['$scope',function ($scope) {
    console.log($scope);
}]);
         
