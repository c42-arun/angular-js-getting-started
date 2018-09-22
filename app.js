(function() {
    var app = angular.module("gitHubViewer", ["ngRoute"]);

    // $routeProvider would be injected from the module "ngRoute"
    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController" // optional if specified in script using "ng-controller" directive
            })
            .otherwise({
                redirectTo: "/main"
            });
    });
}());