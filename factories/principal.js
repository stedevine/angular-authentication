var principal = function ($q, $http, $timeout){
  console.log("principal");
  var _identity = undefined;
  var _authenticated = false;

  return {
    isIdentityResolved: function() {
      return angular.isDefined(_identity);
    },
    isAuthenticated: function() {
      return _authenticated;
    },
    isInRole: function(role) {
      if (!_authenticated || !_identity.roles) return false;
      return _identity.roles.indexOf(role) != -1;
    },
    isInAnyRole: function(roles) {
      if (!_authenticated || !_identity.roles) return false;
      for (var i = 0; i < roles.length; i++) {
        if (this.isInRole(roles[i])) return true;
      }
      return false;
    },
    authenticate: function(identity) {
      _identity = identity;
      _authenticated = identity != null;
    },
    identity: function(force) {
      var deferred = $q.defer();

      if (force === true) _identity = undefined;

      // check to see if we have resolved the identity from the server if so reuse it
      if (angular.isDefined(_identity)) {
        deferred.resolve(_identity);
        return deferred.promise;
      }
      // otherwise fake look up the id:
      var self = this;
      $timeout(function() {
        self.authenticate(null);
        deferred.resolve(_identity);
      }, 1000);

      return deferred.promise;
    }
  };
}
angular
  .module('app')
  .factory('principal', ['$q', '$http', '$timeout', principal]);
