// Code goes here

(function () {

  var app = angular.module("gitHubViewer", []);


  var MainController = function ($scope, $http, $interval) {

    var onUserComplete = function (response) {
      $scope.user = response.data;

      // get user repos
      $http.get($scope.user.repos_url)
        .then(onReposComplete, onError);
    };

    var onReposComplete = function (response) {
      $scope.repos = response.data;
    };

    var onError = function (reason) {
      $scope.error = 'Could not get data';
    };

    $scope.search = function (username) {
      $http.get('https://api.github.com/users/' + username)
        .then(onUserComplete, onError);
    };

    var decrementCounter = function () {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var startCountdown = function () {
      $interval(decrementCounter, 1000, $scope.countdown);
    }

    $scope.message = "GitHub Viewer";
    $scope.username = "angular";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 5;

    startCountdown();
  }

  // passing parameters explicitly so angular knows what they are after mangled by minification
  app.controller("MainController", MainController);

}());