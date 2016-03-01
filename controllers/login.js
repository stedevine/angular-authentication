function loginController($scope, $state, principal) {

  var logIn = function(principal, identity) {
    principal.authenticate(identity);
  }

  $scope.adminLogin = function() {
    var id = {
      name: 'Administrator',
      roles: ['User', 'Admin']
    };
    logIn(principal, id);
    if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
    else $state.go('site.application.admin');
  }


  $scope.userLogin = function() {
    var id = {
      name: 'Test User',
      roles: ['User']
    };
    logIn(principal, id);
    if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
    else $state.go('site.application.userprofile');
  };
}
