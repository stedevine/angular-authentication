// Just passes the principal to the scope so the page can display whether the user is logged in.
function homeController($scope, principal){
  console.log("home controller");
  $scope.principal = principal;
}
/*
angular
  .module('app')
  .controller('HomeController', ['$scope', 'principal', homeController]);
*/
