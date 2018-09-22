(function() {
    var app = angular.module("gitHubViewer", ["ngRoute"]);

    // $routeProvider would be injected from the module "ngRoute"
    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "searchView.html",
                controller: "MainController" // optional if specified in script using "ng-controller" directive
            })
            .when("/user/:username", {
                templateUrl: "userView.html",
                controller: "UserController"
            })
            .otherwise({
                redirectTo: "/main"
            });
    });
}());