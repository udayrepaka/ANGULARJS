// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function() {
    this.groceryItem = '';
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function() {
        if(this.groceryItem === ''){
            alert('Dude! Add At lease One Item');
        }
        else{
            if(this.groceryList.indexOf(this.groceryItem.toUpperCase()) !== -1){
                alert('Dude! the ' + this.groceryItem + ' already Exists');
                this.groceryItem = '';
            }
            else{
                this.groceryList.push(this.groceryItem.toUpperCase());
                this.groceryItem = '';
            }
        }
    };
    this.OnEditMode = function() {
      this.editMode = true;
    };
    this.OffEditMode = function() {
      this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryList.splice(index,1);
    };
    this.replaceItem = function(index,item) {
        this.groceryList.splice(index,1,item);
    };
});