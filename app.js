(function () {
  console.log("app");
  var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);
  app.value('firstValue', '345');

})()
