function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
  console.log('ocLazyLoad config called');

  $ocLazyLoadProvider.config({
       // Set to true if you want to see what and when is dynamically loaded
       debug: true
   });

   

}

angular
  .module('app')
  .config(config)
  .run(function($rootScope, $state) {
          $rootScope.$state = $state;
      });
