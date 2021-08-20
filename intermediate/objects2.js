// A data set of four students is stored. Each student is an object.
//Find the average maths marks

// let students = [
//     {
//         "name": "aditya",
//         "maths": 90,
//         "physics": 87,
//         "chem": 78,
//     },
//     {
//         "name": "riki",
//         "maths": 80,
//         "physics": 77,
//         "chem": 82,
//     },
//     {
//         "name": "priya",
//         "maths": 93,
//         "physics": 78,
//         "chem": 92,
//     },
// ]
/*
students.forEach(function(student){
    console.log(student.maths);
    console.log(student.name);
});
*/
//console.log(students[0]);

/**
 * Object Inside Object 25/7/2021
 */

let myStudent = {
    'First Name': 'Bodhaditya',
    'Last Name': 'Mukherjee',
    'marks': {
        'Secondary' : 73,
        'H.S'       : 60,
    },
}

console.log(myStudent.marks.Secondary);

/**
 * Accessing The Keys
 */

let objectKeys = Object.keys(myStudent);

console.log(objectKeys);