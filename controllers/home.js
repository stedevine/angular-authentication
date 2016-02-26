function homeController($scope, principal){
  console.log("home controller");
  $scope.principal = principal;
}
/*
angular
  .module('app')
  .controller('HomeController', ['$scope', 'principal', homeController]);
*/
