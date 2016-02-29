var authorization = function($rootScope, $state, principal) {
  console.log("authorization");
  return {
    authorize: function() {
      return principal.identity().then(function() {
        var isAuthenticated = principal.isAuthenticated();
        //console.log($rootScope);
        var roles = $rootScope.toState.data.roles;
        //console.log('roles ' + roles);
        if (roles && roles.length > 0 && !principal.isInAnyRole(roles)) {
          if (isAuthenticated) {
            // user is signed in, but does not have access to this page
            $state.go('site.accessdenied');
          } else {
            // user is not authenticated - send them to the login page
            // but first store the current page
            $rootScope.returnToState = $rootScope.toState;
            $rootScope.returnToStateParams = $rootScope.toStateParams;

            $state.go('site.login');
          }
        }
      });
    }
  };
}
angular
  .module('app')
  .factory('authorization', ['$rootScope', '$state', 'principal', authorization]);
