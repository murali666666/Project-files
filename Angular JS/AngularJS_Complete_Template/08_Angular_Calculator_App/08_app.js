//creation of modulde
var app = angular.module('calcApp',[]);

//creation of controller

app.controller('calcAppCtrl',function() {
    this.operator = '+';
    this.result = 'RESULT';
    this.firstNumber = '';
    this.secondNumber = '';
    this.changeOperator = function(opr) {
      this.operator = opr;
    };
    this.calculate = function() {
        switch(this.operator)
        {
            case '+':
                this.result = this.firstNumber + this.secondNumber;
                break;
            case '-':
                this.result = this.firstNumber - this.secondNumber;
                break;
            case '*':
                this.result = this.firstNumber * this.secondNumber;
                break;
            case '/':
                this.result = this.firstNumber / this.secondNumber;
                break;
        }
    };
    this.crearAll = function() {
        this.firstNumber='';
        this.secondNumber='';
        this
    }
});