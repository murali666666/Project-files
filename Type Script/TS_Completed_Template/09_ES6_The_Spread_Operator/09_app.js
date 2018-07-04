/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//Ex:
function Employee() {
    var values = [];
    for (var i = 0; i < arguments.length; i++) {
        values[i] = arguments[i];
    }
    return values;
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}
//to find min
var ary1 = [10, 20, 30, 40];
var min = Math.min.apply(Math, ary1);
console.log('this in min of ary : ${min}');
//add array to another
var a1 = [30, 40, 50];
var a2 = [10, 20].concat(a1, [60]);
console.log(a2);
//to create copy of array
var lang1 = ['html', 'css', 'js'];
var lang2 = lang1.slice();
console.log(lang2);
