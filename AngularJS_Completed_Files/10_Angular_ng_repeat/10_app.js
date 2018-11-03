// Create a Module
var app = angular.module('GoodMorningApp',[]);

// Create a controller
app.controller('GoodMorningAppCtrl',function() {
    this.username = '';
    this.numberOfTimes = null;
    this.numberArray = [];
    this.createArray = function() {
        if(this.numberOfTimes !== null){
            this.numberArray = [];
            for(var i=0; i<this.numberOfTimes; i++){
                this.numberArray[i] = (i+1);
            }
        }
        else{
            this.numberArray = [];
        }

    };
});