var myTodo = [];
/*
myTodo.push('Learn JS');
myTodo.push('Learn Algebra');
myTodo.push('Evening Walk');

myTodo.forEach(function(task, index){
    console.log((index+1)+"->"+task);
});
*/
 // Inserting From Top
myTodo.unshift('Learn JS');
myTodo.unshift('Learn Algebra');
myTodo.unshift('Evening Walk');

for(let index = myTodo.length-1; index>=0; index--){
    console.log('Your task No:- '+ (myTodo.length-index) + ' is:-'+ myTodo[index]);
}