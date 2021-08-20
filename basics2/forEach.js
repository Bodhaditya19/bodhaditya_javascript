
/**
 * Using for loop to print dates
 */
const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

for(let i=0; i<=days.length; i++){
    myDays(days, i);
}
function myDays(funcdays, index){
    console.log(index +'=>'+funcdays[i]);
}

/*
* 
  Same Thing Using foreach method. 
  The Array.forEach() method calls a function once for each element in an array,
  in order.
*/

// days.forEach(myFunction);

// function myFunction(item, index){
//     console.log('['+index+']=>  '+item);
// }
days.forEach(function(item, index){
    console.log(index+' => '+item);
})