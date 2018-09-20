// Code goes here

(function() {

  var app = angular.module("gitHubViewer", []);


  var MainController = function($scope, $http) {
    
    $scope.search = function(username){
      $http.get('https://api.github.com/users/' + username)
        .then((response) => {
          $scope.github = response.data;
        }, (error) => {
          $scope.error = 'Could not get user details';
      });
    };
  }
  
  app.controller("MainController", MainController);
  
}());