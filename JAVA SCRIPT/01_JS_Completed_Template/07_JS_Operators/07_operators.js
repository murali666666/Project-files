
// Assignment operator =
var num1 = 10;
var output="the value of num1 is : "+ num1;
console.log(output);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
output="the sum of  a , b : " + sum;
console.log(output);

// Short hand math += , -= , *= , /=
var x=10;
var y=20;
var add=0;
add=add+(a+b);
add+=(a+b);
output="the value of add:" +add;
console.log(output);

// Conditional operators < , > , <= , >= , !=
var age=25;
if(age>=18)
{
    output="your major";
}
else
{
    output="ur minor";
}
console.log(output);
document.getElementById('display').innerHTML=output;

// Unary Operator ++ , -- (pre , post)
var abc=10;
abc=abc+1;
abc+=1;
abc++;
console.log("the value of abc:" +abc);

// Unary Operator ++ , -- (pre , post)
var abc=10;
abc=abc+1;
abc+=1;
abc++;
output="the value of abc:" + abc;
console.log(output);
document.getElementById('display').innerHTML=output;


// Logical operators AND , OR
var inRelation=true;
var parentsAgree=false;
if(inRelation && parentsAgree)
{
    output="get married";

}
else
{
    output="wait";
}
console.log(output)
document.getElementById('display').innerHTML=output;
// String Concatenation Operator


// Ternary operator (? :)


// Type of operator
var xyz;
xyz=10;
xyz='test';
xyz=true;
xyz=null;
output="value: "+xyz+"data type: "+typeof xyz;
console.log(output);
document.getElementById('display').innerHTML=output;


// == operator
var p=10;
var q="10";
if(p==q)
{
    console.log("both are equal from");
}
else
{
    console.log("both are nt equal");
}
// === operator
p=10;
q="10";
if(p===q)
{
    console.log("both are equal");
}
else
{
    console.log("both are nt equal");
}