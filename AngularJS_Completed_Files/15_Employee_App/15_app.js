// Create a Module
var app = angular.module('EmployeeApp',[]);

// Create a Controller
app.controller('EmployeeAppCtrl',function() {
    this.employee = {
      name : '',
      email : '',
      designation : '',
      gender : ''
    };
    this.employees = [

    ];
    this.addEmployee = function() {
        this.employees.push(this.employee);
        this.employee = {
            name : '',
            email : '',
            designation : '',
            gender : ''
        };
    };
    this.deleteEmployee = function(index) {
      this.employees.splice(index,1);
    };

});
