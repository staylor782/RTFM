var app = angular.module('rtfmApp')

app.controller('threadsCtrl', function($scope, threadService, threadsRef, $firebaseArray) {
    
    $scope.threads = $firebaseArray(threadsRef);
    
/*    $scope.threads.$loaded().then(function(threads){
        console.log(threads);
    });*/
    
    $scope.createThread = function(user, threadTitle) {
        $scope.threads.$add({
            username: user,
            title: threadTitle
        });
    };
})