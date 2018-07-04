// creation of module
var app = angular.module('nestedApp',[]);

//creation of parent contrller
app.controller('parentCtrl',function ($scope) {
    $scope.test = '';
});

//creation of child contrller
app.controller('childCtrl',function ($scope) {

});