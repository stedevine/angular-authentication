/*
(function(){
//app.controller('MainController', ['firstValue', function MainController(firstValue) {
//  this.mainValue = firstValue;
}]);
})();
*/

function mainController(firstValue, apeId, apeToken){
  console.log("main controller");
  this.mainValue = firstValue;
  this.apeValue = apeId;
  this.apeToken = apeToken;
}
angular
  .module('app')
  .controller('MainController', ['firstValue', 'apeId', 'apeToken', mainController]);
