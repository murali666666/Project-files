// creation of arrays
var array=[1,2,3,4,5];
console.log(array);


// Accessing an array and its properties
console.log(array[2]);
console.log(array[0]);

// Access not existed property from an array


// adding properties to an array
array[5]=6;
console.log(array);



// Accessing length of an Array
console.log(array.length);

// reverse the array using reverse()
console.log(array.reverse());

// Remove the first value of the array: shift()
console.log(array.shift());
console.log(array);

// Add value to front of the array:unshift()
array.unshift(11,22);
console.log(array);

// Remove the last value of the array: pop()
array.pop();
console.log(array);



// Add value the end of the array: push()

array.push(33,44);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array.splice(2,4);// here 2 is the index of the array and 4 is number of elements should b deleted from the index
console.log(array);


// Create a copy of an array. Typically assigned to a new variable:slice();
var array2 = array.slice();
console.log(array2);

// Return the first element that matches the search parameter
var search=array.indexOf(11,0);
if (search>=0)
{
    var result="11 is in array["+search+"] place of the array";
    console.log(result);
}
else
{
    console.log("11 not found");
}



// after the specified index position. Defaults to index position 0. Arguments: colors.indexOf(search, index):
// var result = colors.indexOf(search, index);
// console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: colors.join(separator):
// var arrayString = colors.join(separator);
// console.log("String from array: ", arrayString);

// Prove an array is an Object

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array