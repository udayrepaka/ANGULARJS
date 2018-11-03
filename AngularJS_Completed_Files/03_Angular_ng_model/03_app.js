// TO Create a module
var app = angular.module('LoginApp',[]);

// to Create a controller
app.controller('LoginAppCtrl',function ($scope) {
    $scope.username = ' ';
    $scope.email = ' ';
    $scope.password = ' ';
    $scope.check = null;
});