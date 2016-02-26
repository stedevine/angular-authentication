function mainController(firstValue, apeId, apeToken){
  console.log("main controller");
  this.mainValue = firstValue;
  this.apeValue = apeId;
  this.apeToken = apeToken;
}
angular
  .module('app')
  .controller('MainController', ['firstValue', 'apeId', 'apeToken', 'principal', mainController]);
