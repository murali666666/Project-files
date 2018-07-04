//creation of objects
var obj={};


//Adding properties to objects
obj.name='murli';
obj.age=45;
obj.designation='manager';
console.log(obj);


//Retrieving properties of objects
var objName=obj.name;
console.log(objName);


//declaring Object Literals
var employee ={
  name : 'murali',
  age:23,
  designation: 'teamlead'
};
console.log(employee);


//Access existing properties
var empName=employee.name;
console.log(empName);


//Access Non Existing Properties
var empSalary=employee.salary;
console.log(empSalary);


// Usage of Dot and [] notations
var empDesg1 = employee.designation;
var empDesg2 = employee['designation'];
console.log(empDesg2);


// use of [] notation where dot is not used for invalid identifiers
var student={
    name:'avmk',
    age:22,
    course:'engg',
    10:'india'
};
var stdprop = student['10'];
console.log(stdprop);



// use of [] notation for accessing dynamic properties
var dynaprop = 'name';
console.log(student[dynaprop]);

dynaprop = 'age';
console.log(student[dynaprop]);

dynaprop = 'course';
console.log(student[dynaprop]);



// nested Objects creation
var showroom={
    name : 'audi hyderabad',
    estd : 1991,
    address : {
        city : 'hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};


//Accessing them using dot notation
var showroomCity= showroom.address.city;
console.log(showroomCity);


//Accessing them using mix of dot and [] notation
var showroomState1= showroom.address.state;
console.log(showroomState1);

var showroomState2= showroom.address['state'];
console.log(showroomState2);



// Add some properties to nested object and access them
showroom.address.street='Hitech City';
console.log(showroom.address);

// === operator demo for objects (if pointing to same location in memory)
var emp1={
    name:'murl',
    age:24,
    desg:'tl'
};
var emp2=emp1;

if(emp1===emp2)
{
    console.log('both are equal');
}
else
{
    console.log('both are not equal');
}


// deleting a property from an object
console.log(emp1);

delete emp1.desg;
console.log(emp1);