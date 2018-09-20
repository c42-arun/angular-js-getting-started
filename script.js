// Code goes here

(function() {

  var app = angular.module("gitHubViewer", []);


  var MainController = function($scope, $http) {
    $scope.person = {
      firstName: "Arun",
      lastName: "Kumar"
    };
    
    $http.get('https://api.github.com/users/odetocode1')
    .then((response) => {
      $scope.github = response.data;
    }, (error) => {
      $scope.error = 'Could not get user details';
    });
  }
  
  app.controller("MainController", MainController);
  
}());