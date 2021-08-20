    let student = [
        {name: 'Akash', class: 6, Age: 12 },
        {name: 'Manish',class:7, Age: 13 },
        {name: 'Vinod', class: 8, Age: 14 }

    ]

    //console.log(student.name);
/**
 * Looping and printing in an array
 */
    //  for(let i=0; i<student.length; i++){
    //      console.log(student[i].name);
    //  }
    //  console.log(student.length);
/**
 * Conditional for loop
 */
//  for(let i=0; i<student.length; i++){
//     if(student[i].name == 'Akash'){
//         console.log(student[i].name+'=>'+student[i].class);
//     }
// }
/**
 * Conditional foreach
 */
student.forEach(findAkash);

function findAkash(item, index){
    console.log(item.name);
}