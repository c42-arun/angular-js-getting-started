// Code goes here

(function() {

  var app = angular.module("gitHubViewer", []);


  var MainController = function(
            $scope, $http, $interval, $log, $location, $anchorScroll, github) {

    var onUserComplete = function(data) {
      $scope.user = data;

      // get user repos
      github.getRepos(data)
        .then(onReposComplete, onError);
    };

    var onReposComplete = function(data) {
      $scope.repos = data;
      
      $location.hash("userDetails");
      $anchorScroll();
    };

    var onError = function(reason) {
      $scope.error = 'Could not get data';
    };

    $scope.search = function(username){
      $log.info('Searching for ' + username);
      github.getUser(username)
        .then(onUserComplete, onError);

        if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdownHide = true;
        }
    };

    var decrementCoundown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCoundown, 1000, 5);
    };

    $scope.message = "GitHub Viewer";
    $scope.username = "angular";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 5;

    startCountdown();
  }
  
  // removed passing parameters explicitly just to make demo code easier to write
  app.controller("MainController", MainController);
  
}());