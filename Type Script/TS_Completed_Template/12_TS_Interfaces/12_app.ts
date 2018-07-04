// Create a Student Interface , and printStudent function

interface Student {
    stdName:string,
    age:number,
    course:string,
    address: {
        city: string,
        state: string,
        country: string
    }
}

function printStudent(student : Student) {
    console.log(`Student Name :${student.stdName}
                 Student Age :${student.age}
                 Student course  :${student.course}
                 Student city :${student.address.city}
                 Student state :${student.address.state}
                 Student country :${student.address.country}
                 `)
}

let student:Student= {
    stdName: 'murali',
    age: 24,
    course: 'ui',
    address: {
        city: 'hyd',
        state: 'tg',
        country: 'india'
    }
}
printStudent(student);