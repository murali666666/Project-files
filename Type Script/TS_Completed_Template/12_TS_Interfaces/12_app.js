// Create a Student Interface , and printStudent function
function printStudent(student) {
    console.log("Student Name :" + student.stdName + "\n                 Student Age :" + student.age + "\n                 Student course  :" + student.course + "\n                 Student city :" + student.address.city + "\n                 Student state :" + student.address.state + "\n                 Student country :" + student.address.country + "\n                 ");
}
var student = {
    stdName: 'murali',
    age: 24,
    course: 'ui',
    address: {
        city: 'hyd',
        state: 'tg',
        country: 'india'
    }
};
printStudent(student);
