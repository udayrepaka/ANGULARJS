// Create a module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function() {
    this.number = '';
    this.displayMsg = '';
    this.displayString = function() {
        var tempStr = '';
        var numberArray = ['ZERO' , 'ONE' , 'TWO' , 'THREE', 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT', 'NINE'];
        if(this.number !== undefined){
            for(var i = 0; i<this.number.length; i++){
                var index = parseInt(this.number.charAt(i));
                tempStr += numberArray[index] + ' ';
            }
            this.displayMsg = tempStr;
        }
        else{
            this.displayMsg = '';
        }
    };

});

app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});