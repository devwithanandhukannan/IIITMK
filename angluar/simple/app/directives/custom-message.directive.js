angular.module("myApp")
.directive("customMessage", function() {
  return {
    template: "<h3>This is a custom directive 🚀</h3>"
  };
});