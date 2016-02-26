var principal = function ($q, $http, $timeout){
  console.log("principal");
  return {};
}
angular
  .module('app')
  .factory('principal', ['$q', '$http', '$timeout', principal]);
