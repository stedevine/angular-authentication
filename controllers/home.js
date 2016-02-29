// Just passes the principal to the scope so the page can display whether the user is logged in.
function homeController($scope, $state, principal){
  console.log("home controller");
  $scope.principal = principal;
  $scope.logOut = function() {
    console.log('log out');
    principal.authenticate(null);
    localStorage.clear();
    $state.go('site.login');
  }
}
/*
angular
  .module('app')
  .controller('HomeController', ['$scope', 'principal', homeController]);
*/
