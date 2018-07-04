/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

//Ex:

function Employee(){

    let values = [];
    for(let i=0; i<arguments.length;i++){
        values[i] = arguments[i];
    }
    return values;

    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}

//to find min
let ary1:Array<number>=[10,20,30,40];
let min=Math.min(...ary1);
console.log('this in min of ary : ${min}');


//add array to another

let a1:Array<number>=[30,40,50];
let a2:Array<number>=[10,20,...a1,60];
console.log(a2);

//to create copy of array

let lang1:Array<string>=['html','css','js'];
let lang2:Array<string>=[...lang1];
console.log(lang2);