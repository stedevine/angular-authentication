(function() {
  console.log("app");
  var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);

  app.value('firstValue', '345');

  app.factory('apeId', function apeIdFactory() {
    console.log('ape id factory');
    return 'ape # 143';
  });


  app.factory('apeToken', ['firstValue', function apeTokenFactory(firstValue) {
    var encrypt = function(data1, data2) {
      return (data1 + ':' + data2).toUpperCase();
    }

    var d = new Date();
    return encrypt(firstValue, d.getMilliseconds());
  }]);

})()
