angular.module("myApp")
.config(function($routeProvider) {

  $routeProvider
    .when("/", {
      template: "<h2>Home Page</h2><custom-message></custom-message>"
    })
    .when("/users", {
      templateUrl: "templates/users.html",
      controller: "UserController"
    })
    .otherwise({
      redirectTo: "/"
    });

});