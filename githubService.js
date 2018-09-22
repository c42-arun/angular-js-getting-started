(function () {

    // create a function following "revealing module pattern"
    // i.e when called (by angular sub-system) would return an object with only public data/methods on it
    // angular can inject otehr services (such as $http) when registering this service
    var githubServiceFactory = function($http) {
        
        var getUser = function(username) {
            // note that the "then" returns a promise to the caller
            return $http.get('https://api.github.com/users/' + username)
                    .then((response) => {
                        return response.data;
                    });
        };

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                    .then((response) => {
                        return response.data;
                    });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    }

    // get our main module (note we *do not* pass any additional parameters - so it makes this a get)
    var module = angular.module("gitHubViewer");
    module.factory("github", githubServiceFactory);
}());
