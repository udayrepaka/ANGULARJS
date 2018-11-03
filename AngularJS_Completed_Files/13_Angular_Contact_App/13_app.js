// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = [];
    $scope.selectedPerson = null;

    // Read the JSON Data
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/3015687e74bd35b261f9c7f257fcf01d/raw/1aa01b59f629b429ffd5d39d9e1eb52f924ca291/06102018.json').then(function(response) {
        $scope.contactList = response.data.contacts;
        console.log($scope.contactList);
    });

    $scope.selectAContact = function(index) {
        $scope.selectedPerson = $scope.contactList[index];
    };
});