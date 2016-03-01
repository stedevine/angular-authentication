function userdetails() {
  $scope.getUserDetails = function(userId) {

    // This could be a call to the database
    var allUsers = {[
      {
        id : 1,
        name : "Susan User",
        email : "susan@susan-user.org",
        telephone : "(206)-446-0944",
        projects : [{
          name : "Electro 2000",
          position : "Project Manager",
        },
        {
          name : "Deltron",
          position : "Lead Developer",
        }]
      },
      {
        id : 2,
        name : "Simon Admin",
        email : "simon@allaccess.net",
        telephone : "(425)-555-1564",
        projects : [{
          name : "Electro 2000",
          position : "Hardware Designer",
        },
        {
          name : "Formix",
          position : "Electrical Engineer",
        }]
      },

      var x = allUsers.filter(function(item){ return item.id == userId})[0];
      return x;
    ]}

  }

}
