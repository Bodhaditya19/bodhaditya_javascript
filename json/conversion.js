/**
 * Converting Object in to JSON  --  stringify
 */

 let newStudents = {
    name : "John",
    age  : 25,
}
//console.log(newStudents);

let stringStudent = JSON.stringify(newStudents);
console.log(stringStudent);

/**
 * Converting JSON in to object
 */

objectStudent = JSON.parse(stringStudent);
console.log(objectStudent);
/**
 * Hello World!!!
 */

