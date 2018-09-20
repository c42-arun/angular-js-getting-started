// Code goes here

(function() {

  var app = angular.module("gitHubViewer", []);


  var MainController = function($scope, $http) {

    $scope.message = "GitHub Viewer";

    $scope.repoSortOrder = "-stargazers_count";

    var onUserComplete = function(response) {
      $scope.user = response.data;

      // get user repos
      $http.get($scope.user.repos_url)
        .then(onReposComplete, onError);
    };

    var onReposComplete = function(response) {
      $scope.repos = response.data;
    };

    var onError = function(reason) {
      $scope.error = 'Could not get data';
    };

    $scope.search = function(username){
      $http.get('https://api.github.com/users/' + username)
        .then(onUserComplete, onError);
    };
  }
  
  // passing parameters explicitly so angular knows what they are after mangled by minification
  app.controller("MainController", ["$scope", "$http", MainController]);
  
}());