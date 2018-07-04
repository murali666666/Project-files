// Hello World Example
var greeting = "Good Morning";
console.log(greeting);
document.querySelector('#display').innerHTML = greeting;
// Variables Creation in TypeScript
var num1 = 10;
var num2 = 20;
var result = '';
function findMin(a, b) {
    return Math.max(a, b);
}
result = 'the biggest value is ' + findMin(num1, num2);
console.log(result);
document.querySelector('#display').innerHTML = result;
