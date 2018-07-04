/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/


// Create a function and provide few default parameters using ES6

function greet(name:string,age:number=26):string {
    return "hello "+name+ " You are "+age+" years old!! ";
}

let output:string= greet('murli');
console.log(output);
document.querySelector('#display').innerHTML = output;