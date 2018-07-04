// Create a simple function to add two numbers
function add(a:number,b:number):number{
    let sum:number = a+b;
    return sum;
}
console.log(`sum is ${add(10,20)}`);


// Create the same add function with first number as 'any' type

function add1(a:any,b:number):number{
    let result=0;
    if (typeof a === 'number')
    {
        result=a+b;

    }
    else if(typeof a==='string'){
        if (isNaN(parseFloat(a))){
            result = b;

        }
        else
        {
            result = parseFloat(a)+b;
        }
    }
    else
    {
        result=b;
    }
    return result;
}
 console.log(`the sum is: ${add1(10,20)}`);


// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers

function max(a:number):number;
function max(a:number,b:number):number;
function max(a:number,b:number,c:number):number;
function max(a:number,b?:number,c?:number){
 if (b === undefined && c === undefined)
 {
     return a;
 }
 else if(c===undefined)
 {
     return Math.max(a,b);
 }
 else
 {
     return Math.max(a,b,c);
 }
}
console.log(`the max value: ${max(10)}`);
console.log(`the max value: ${max(10,20)}`);
console.log(`the max value: ${max(10,20,30)}`);
//console.log(`the max value: ${max(10,20,30,40)}`);
//this is not work

// Function Overloading in TypeScript , findMin using Math

// Create an Employee function and get an Employee Object
