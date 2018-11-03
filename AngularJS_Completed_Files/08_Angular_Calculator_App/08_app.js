// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumer = null;
    this.operator = '+';
    this.results = 'RESULT';
    this.changeOperator = function(symbol) {
        this.operator = symbol;
    };
    this.calculate = function() {
        var data = 0;
        if(this.firstNumber !== null && this.secondNumer !== null){
            switch(this.operator){
                case '+':
                    data = this.firstNumber + this.secondNumer;
                    break;
                case '-':
                    data = this.firstNumber - this.secondNumer;
                    break;
                case '/':
                    data = this.firstNumber / this.secondNumer;
                    break;
                case '*':
                    data = this.firstNumber * this.secondNumer;
                    break;
                default:
                    data = 'RESULT';
                    break;
            }
            this.results = data.toString();
        }
        else{
            this.results = 'RESULT';
        }
    };
    this.clearAll = function(){
        this.firstNumber = null;
        this.secondNumer = null;
        this.operator = '+';
        this.results = 'RESULT';
    };
});