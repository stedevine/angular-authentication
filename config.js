function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
  console.log('ocLazyLoad config called');

  $urlRouterProvider.otherwise('/login');

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
      },
      views: {
        'content@': {
          templateUrl: 'index.html',
          controller: 'HomeController'
        }
      }
    })
    .state('login', {
      parent: 'site',
      url: "/login",
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: 'views/login.html'
        }
      }
    })
    .state('accessdenied', {
      parent: 'site',
      url: "/accessdenied",
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: 'views/accessdenied.html'
        }
      }
    })
    .state('admin', {
      parent: 'site',
      url: "/admin",
      data: {
        roles: ['Admin']
      },
      views: {
        'content@': {
          templateUrl: 'views/admin.html'
        }
      }
    })
    .state('userprofile', {
      parent: 'site',
      url: "/userprofile",
      data: {
        roles: ['User']
      },
      views: {
        'content@': {
          templateUrl: 'views/userprofile.html'
        }
      }
    });
}

angular
  .module('app')
  .config(config)
  .run(['$rootScope', '$state', '$stateParams', 'authorization', 'principal', function($rootScope, $state, $stateParams, authorization, principal) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
      console.log("state change start!");
      // track the state the user wants to move to
      $rootScope.toState = toState;
      $rootScope.toStateParms = toStateParams;
      if (principal.isIdentityResolved()) authorization.authorize();
    });
    //$rootScope.$state = $state;
  }]);
