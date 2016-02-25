function config($ocLazyLoadProvider) {
  console.log('ocLazyLoad config called');

}

angular
  .module('app')
  .config(config)
  .run(function($rootScope, $state) {
          $rootScope.$state = $state;
      });
