angular.module("myApp")
.controller("UserController", function($scope, UserService) {

  $scope.users = [];

  UserService.getUsers().then(function(response) {
    $scope.users = response.data;
  });

  $scope.addUser = function() {
    if ($scope.userForm.$valid) {
      $scope.users.push({
        name: $scope.newUser.name,
        email: $scope.newUser.email
      });
      $scope.newUser = {};
    }
  };

});