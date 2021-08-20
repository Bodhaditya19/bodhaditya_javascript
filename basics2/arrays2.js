//var myNumber = ['one', 'two', 'three', 'four', 'five', 'six'];
//myNumber.shift(); //the idex shifts one index point
//console.log(myNumber);
//console.log(myNumber.shift());  //showing the shifted element
//console.log(myNumber);
//myNumber.unshift();
//myNumber.pop(); //deletes the last element
//myNumber.push('Hello World'); //inserts an element in the last position
// myNumber.splice(2, 2, 3,4); //from where start deleting, how many elements, the elements want to insert 

//console.log(myNumber);

/**
 * Push using an array      5/8/2021
 */

// let myMarks = {'Rekha':56, 'Suresh':62, 'Mahesh':73, 'Vinesh':48};
// myMarks.forEach(marksFunction)

// function marksFunction(item, index){
//     console.log(index);
// } 


// var myMarks = [98, 62, 53, 65, 72];
// let firstClass = [];
// myMarks.forEach(item=>{
//     if(item>60){
//         firstClass.push(item);
//     }
// })
// console.log(firstClass);

/**
 * Using Filter
 */

 var myMarks = [98, 62, 53, 65, 72];
let firstClass = myMarks.filter(marks=>{
    return marks>=60;
})
console.log(firstClass);

/**
 * With Associative array
 * Can't Be Run
 */

// let sutdentMarks = { 'tom' : 92, 'dick': 68, 'harry': 72  };
// let topMarks = sutdentMarks.filter((element)=>{
//     return element >= 70;
// });
// console.log(topMarks);
