// TODO: only implement getting user details functionality

(function () {

    var app = angular.module("gitHubViewer");

    var UserController = function ($scope, github, $routeParams) {

        var onUserComplete = function (data) {
            $scope.user = data;

            // get user repos
            github.getRepos(data)
                .then(onReposComplete, onError);
        };

        var onReposComplete = function (data) {
            $scope.repos = data;
        };

        var onError = function (reason) {
            $scope.error = 'Could not get data';
        };

        $scope.repoSortOrder = "-stargazers_count";
        
        var username = $routeParams.username;

        github.getUser(username).then(onUserComplete, onError);
    }

    // removed passing parameters explicitly just to make demo code easier to write
    app.controller("UserController", UserController);

}());