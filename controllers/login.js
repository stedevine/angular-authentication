function loginController($scope, $state, principal) {

  var logIn = function(principal, identity) {
    principal.authenticate(identity);
  }

  $scope.adminLogin = function() {
    var id = {
      id : 2,
      roles: ['User', 'Admin']
    };
    logIn(principal, id);
    if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
    else $state.go('site.application.admin');
  }


  $scope.userLogin = function() {
    var id = {
      id : 1,
      roles: ['User']
    };
    logIn(principal, id);
    if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
    else $state.go('site.application.userprofile');
  };
}

angular
  .module('app')
  .controller('loginController', ['$scope', '$state', 'principal', loginController]);
