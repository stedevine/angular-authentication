function loginController($scope, $state, principal) {
  $scope.login = function() {
    // here, we fake authenticating and give a fake user
    principal.authenticate({
      name: 'Test User',
      roles: ['User']
    });

    if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
    else $state.go('userprofile');
  }
}
/*
angular
  .module('app')
  .controller('LoginController', ['$scope', '$state', 'principal', LoginController]);
*/
