/*
(function(){
//app.controller('MainController', ['firstValue', function MainController(firstValue) {
//  this.mainValue = firstValue;
}]);
})();
*/

function mainController(firstValue){
  console.log("main controller");
  this.mainValue = firstValue;
}
angular
  .module('app')
  .controller('MainController', ['firstValue', mainController]);
