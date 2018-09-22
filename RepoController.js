(function() {
    var repoController = function($routeParams, $scope, github) {
        $scope.user = $routeParams.username;
        $scope.repo = $routeParams.reponame;

        var onRepoComplete = function(data) {
            $scope.openIssuesCount = data.open_issues_count;

            github.getContributors($scope.user, $scope.repo)
                .then(onContributorsComplete, onError);
        };

        var onContributorsComplete = function(data) {
            $scope.contributors = data;
        };

        var onError = function() {
            $scope.error = 'An error occured while getting data';
        };

        github.getRepo($scope.user, $scope.repo)
            .then(onRepoComplete, onError);
    };

    var app = angular.module("gitHubViewer");
    app.controller("RepoController", repoController);
}());