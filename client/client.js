var app = angular.module('routeSoloApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/Bern', {
      templateUrl:'views/bern.html',
			controller: 'BernController'
    })
    .when('/T-rump', {
      templateUrl: 'views/trumpin.html',
      controller: 'YuugeController'
    })
    .when('/El-nino', {
      templateUrl: 'views/storms.html',
      controller: 'weatherController'
    });

    $locationProvider.html5Mode(true);
}]);

app.controller('BernController', ['$scope', function($scope){

}]);

app.controller('YuugeController', ['$scope', function($scope){

}]);

app.controller('weatherController', ['$scope', function($scope){

}]);
