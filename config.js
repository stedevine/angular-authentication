function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
  console.log('ocLazyLoad config called');

  $urlRouterProvider.otherwise('/user');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $stateProvider
    .state('site', {
      'abstract': true,
      resolve: {
        authorize: ['authorization', function(authorization) {
          return authorization.authorize();
        }]
      }
    })
    .state('site.login', {
      url: "/login",
      data: {
        roles: []
      },
      views: {
        'site@': {
          templateUrl: 'views/site/login.html',
          controller: 'loginController',
        }
      },
      resolve: {
        loadController: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
              name: 'app',
              files: ['controllers/login.js']
            }

          )
        }]
      }
    })
    .state('site.application', {
      'abstract': true,
      resolve: {
        authorize: ['authorization', function(authorization) {
          return authorization.authorize();
        }]
      },
      views: {
        'site@': {
          templateUrl: 'views/site/application_container.html',
          controller: 'homeController'
        }
      },
      resolve: {
        loadController: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['controllers/home.js']
          })
        }]
      }
    })
    .state('site.application.accessdenied', {
      url: "/accessdenied",
      data: {
        roles: []
      },
      templateUrl: 'views/site/application/accessdenied.html',
    })
    .state('site.application.admin', {
      url: "/admin",
      data: {
        roles: ['Admin']
      },
      templateUrl: 'views/site/application/admin.html',
    })
    .state('site.application.userprofile', {
      url: "/userprofile",
      data: {
        roles: ['User']
      },
      templateUrl: 'views/site/application/userprofile.html',
    });
}

angular
  .module('app')
  .config(config)
  .run(['$rootScope', '$state', '$stateParams', 'authorization', 'principal', function($rootScope, $state, $stateParams, authorization, principal) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
      console.log(toState);
      // track the state the user wants to move to
      $rootScope.toState = toState;
      $rootScope.toStateParms = toStateParams;
      if (principal.isIdentityResolved()) authorization.authorize();
    });
  }]);
