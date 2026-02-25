angular.module("myApp")
.service("UserService", function($http) {

  this.getUsers = function() {
    return $http.get("https://jsonplaceholder.typicode.com/users");
  };

});