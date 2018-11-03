// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function() {
    this.editMode = true;
    this.invoice = {
        customer_data : {
            customer_name : 'Mr. Rajan Jain',
            company : 'Jain Industries, Inc',
            address_1 : 'Plot No. 112',
            address_2 : 'Hitech City , Hyderabad',
            pincode : 500010
        },
        company_data : {
            company_name : 'UiBrains Techno Labs',
            website :  'UiBrains.com',
            address_1 : 'Plot No: 1471 , Road No: 12',
            address_2 : 'Jubilee Hills , Hyderabad',
            pincode : 500101
        },
        items : [

        ],
        gst : 13
    };
    this.addItem = function() {
        var item = {
            description : '',
            quantity: null,
            cost : null
        };
        this.invoice.items.push(item);
    };
    this.deleteItem = function(index) {
      this.invoice.items.splice(index,1);
    };
    this.subTotal = function() {
       /* var subtotal = 0;
       for(var i=0; i<this.invoice.items.length; i++){
           var item = this.invoice.items[i];
           subtotal += (item.quantity * item.cost);
       }
       return subtotal; */
       var subtotal = 0;
       this.invoice.items.forEach(function(item) {
           subtotal += (item.quantity * item.cost);
       });
       return subtotal;
    };
    this.addGST = function() {
        return this.subTotal() * (this.invoice.gst / 100);
    };
    this.grandTotal = function() {
       return this.subTotal() + this.addGST();
    };
    this.switchONEditMode = function() {
      this.editMode = true;
    };
    this.switchOFFEditMode = function() {
      this.editMode = false;
    };
    this.printDoc = function() {
      window.print();
    };
});