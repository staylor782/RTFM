var app = angular.module('rtfmApp');

app.service('homeService', function(fb) {
    var ref = new Firebase(fb.url);
    
    this.getFirebase = function() {
        return new Firebase(ref + '/home');
    }
})