/**
 * Normal Way
 */

let myName = function (name) {
    console.log('Hello ' + name + '!!\n');
}
myName('Bodhaditya');

/**
 * Arrow Way
 */

let myDay = (day) => {
    console.log(day);
}

myDay('Monday');

/**
 * forEach in arrow function
 */

const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

days.forEach((item, index) => {
    console.log(index + ' => ' + item);
})

