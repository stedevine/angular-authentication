function test(principal){
  console.log("test controller");
  this.principal = principal;
}

angular
  .module('app')
  .controller('TestController', ['principal', test]);
