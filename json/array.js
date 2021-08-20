/**
 * Nested object with Array
 */
var person = {
    myName    :   'Adi',
    myAge     :   '27',
    address :   {
        street  :   "19, N.C Saha Road",
        city    :   "Uttarpara",
    },
    hobbies :   ['Reading', 'Music']     
}

// console.log(person.address.street);
// console.log(person.hobbies);

/**
 * An array of objects
 */
var people = [
    {
        name : 'Adi',
        age  : 27,
    },
    {
        name : 'John',
        age  : 30,
    },
    {
        name : 'Tom',
        age  : 35,
    }
]

console.log(people[0].name);