// Create a module
var app = angular.module('clockApp',[]);

// create a controller
app.controller('clockAppCtrl',function ($scope,$interval) {
    //indian clock
    $scope.indianClock = function () {
        var today = new Date();
        var option = {timeZone : 'Asia/Kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-Us',option);
        $scope.indianDate = today.toLocaleDateString('en-US',option);
    };
    $interval($scope.indianClock,1000);

    //usa clock
    $scope.usaClock = function () {
        var today = new Date();
        var option = {timeZone : 'America/New_York'};
        $scope.usaTime = today.toLocaleTimeString('en-Us',option);
        $scope.usaDate = today.toLocaleDateString('en-US',option);
    };
    $interval($scope.usaClock,1000);


    //china clock
    $scope.chinaClock = function () {
        var today = new Date();
        var option = {timeZone : 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-Us',option);
        $scope.chinaDate = today.toLocaleDateString('en-US',option);
    };
    $interval($scope.chinaClock,1000);

});