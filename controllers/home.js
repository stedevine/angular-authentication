function homeController($scope, $state, principal) {
  console.log("home controller");
  $scope.principal = principal;

  $scope.logOut = function() {
    console.log('log out');
    principal.authenticate(null);
    localStorage.clear();
    $state.go('site.login');
  };

    $scope.userDetails = {};

    getUserDetails = function(userId) {
      // This could be a call to the database
      if (principal == null) {
        return null;
      }

      var allUsers = [{
        id: 1,
        name: "Susan User",
        email: "susan@susan-user.org",
        telephone: "(206)-446-0944",
        projects: [{
          name: "Electro 2000",
          position: "Project Manager",
        }, {
          name: "Deltron",
          position: "Lead Developer",
        }]
      }, {
        id: 2,
        name: "Simon Admin",
        email: "simon@allaccess.net",
        telephone: "(425)-555-1564",
        projects: [{
          name: "Electro 2000",
          position: "Hardware Designer",
        }, {
          name: "Formix",
          position: "Electrical Engineer",
        }]
      }];

      var userDetails = allUsers.filter(function(item) {
        return item.id == principal.id()
      })[0];
      console.log(userDetails);
      $scope.userDetails =userDetails;
    };
    getUserDetails();
}

angular
  .module('app')
  .controller('homeController', ['$scope', '$state', 'principal', homeController]);
