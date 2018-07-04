//creation of a simple function with no args and execute a function
function greet() {
    console.log('Im no-arg function')
}
greet();


//creation of a simple function with args
function greetArgs(name) {
    var greetingMsg="Good Morning "+name;
    console.log(greetingMsg);
    document.getElementById('display').innerHTML = greetingMsg;
}

greetArgs('murali');



// executing a function with less number of params

function greetLessArgs(name,age) {
    var greetMsg ="hello "+name+" your are "+age+" yrs old!!";
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}

greetLessArgs('murali');



//executing a function with more number of params
function greetMoreArgs(name,age) {
    var greetMsg ="hello "+name+" your are "+age+" yrs old!!";
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}

greetMoreArgs('murali',28,'team leader');
{

}

//function overloading is not possible here
//no example check the above code

// functions with return values
function greetReturn(name) {
    var greet="hello "+name+ " Im from function return";
    return greet;
}
var greetingMsg= greetReturn('murali');
console.log(greetingMsg);
document.getElementById('display').innerHTML = greetingMsg;



//function with empty return /no return
function greetEmptyReturn(name) {
    var greet="hello "+name+ "Im form greetEmptyReturn Function"

}
var greetMsg= greetEmptyReturn('murali');
console.log(greetMsg);
document.getElementById('display').innerHTML = greetMsg;

// function Expressions with name and execution
var greetExpFn=function greet() {
    var output ="hello Im from function Expression";
    console.log(output);
    document.getElementById('display').innerHTML = output;
};

greetExpFn();


// Anonymous Function Expression and execution
var greetAnonymousFn=function(name) {
    var output ="hello "+name +" Im from Anonymous function";
    console.log(output);
    document.getElementById('display').innerHTML = output;
};

greetAnonymousFn('murali');

// Functions as arguments without args
function greet1(name) {
    var output="hello "+name+ " Im from greet1 finction";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greet2(name) {
    var output="hello "+name+ " Im from greet2 finction";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greetEngine(Fname,name) {
    Fname(name);
}
greetEngine(greet1,'murali');
greetEngine(greet2,'Krishna');
// Functions as arguments with args args


// Functions in Objects and Execution
var employee = {
                finame : "murali",
                laname : "adapa",
                fullName : function () {
                    var output = this.finame+" "+this.laname;
                    console.log(output);
                }
};
employee.fullName();
// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var emp22={
    name:"murali",
    age:33,
    state:"hy",
    isFromState : function () {
        if (emp22.state==="hyd")
        {
            return true;
        }
        else
        {
            return 0;
        }
    }
};
var rt=emp22.isFromState();
console.log(rt);
// Default Function Arguments (arguments)


