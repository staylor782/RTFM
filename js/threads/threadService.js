var app = angular.module('rtfmApp');
    
app.service('threadService', function(fb) {
    
    var firebaseRef = new Firebase(fb.url);
    
    this.getThreads = function() {
        return new Firebase(firebaseRef + '/threads');
    }
    
    this.getThread = function(threadId) {
        return new Firebase(firebaseRef + '/threads/' + threadId);
    }
    
    this.getComments = function(threadId) {
        return new Firebase(firebaseRef + '/threads/' + threadId + '/comments');
    }
})