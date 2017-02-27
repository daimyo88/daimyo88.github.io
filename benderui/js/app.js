var app = angular.module("myApp", ["ngRoute"]);

app.controller("MainCtrl", function($scope) {
  $scope.value = 0;

  $scope.setVal = function(number) {
    $scope.value += number;
    console.log($scope.value);
  }
})






app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

    $routeProvider
    .when("/", {
        templateUrl : "views/start.html"
    })
    .when("/homing", {
        templateUrl : "views/homing.html"
    })

});
