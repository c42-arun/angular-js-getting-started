// Code goes here

(function() {

  // we only now *get* the app (creating is moved to app.js)
  // and register the MainController with it
  var app = angular.module("gitHubViewer");

  var MainController = function($scope, $interval, $location) {

    $scope.search = function(username){
       if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdownHide = true;
        }
        $location.path("/user/" + username);
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, 5);
    };

    $scope.username = "angular";
    $scope.countdown = 5;

    startCountdown();
  }
  
  // removed passing parameters explicitly just to make demo code easier to write
  app.controller("MainController", MainController);
  
}());