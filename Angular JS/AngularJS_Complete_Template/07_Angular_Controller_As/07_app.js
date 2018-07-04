//creation of modeule
var app = angular.module('NestedAsApp',[]);

//creation of parent controller
app.controller('parentAsCtrl',function () {
    this.test = '';
});

//creation of child controller
app.controller('childAsCtrl',function () {
    this.test = '';
});