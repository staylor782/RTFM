var app = angular.module('rtfmApp');

app.controller('homeCtrl', function($scope, $firebaseAuth, homeService, fb) {
    
    $scope.loggedIn = false;
    
    var ref = new Firebase(fb.url);
    
    $scope.authObj = $firebaseAuth(ref);
    $scope.user = $scope.authObj.$getAuth();
  
    $scope.login = function() {
        $scope.authObj.$authWithOAuthRedirect("google");
    };
  
    $scope.authObj.$onAuth(function(authObj) {
        $scope.user = authObj;
        $scope.loggedIn = true;
    });
  
    $scope.logout = function() {
        $scope.authObj.$unauth();
        $scope.loggedIn = false;
    };
})