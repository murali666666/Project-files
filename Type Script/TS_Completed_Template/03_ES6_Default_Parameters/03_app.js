/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (age === void 0) { age = 26; }
    return "hello " + name + " You are " + age + " years old!! ";
}
var output = greet('murli');
console.log(output);
document.querySelector('#display').innerHTML = output;
