function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
  console.log('ocLazyLoad config called');

  $urlRouterProvider.otherwise('/login');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "views/admin.html",
    })
    .state('userprofile', {
      url: "/userprofile",
      templateUrl: "views/userprofile.html",
    });
}

angular
  .module('app')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
