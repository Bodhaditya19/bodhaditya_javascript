/**
 * Creating and Inserting element in DOM by using JavaScript
 */


// Creating a div
let myDiv = document.createElement('div');
myDiv.className = 'parent';

// Creating a heading
let myHeading = document.createElement('h1');
myHeading.className = 'heading';


// Inserting text in to the heading
let headinText = document.createTextNode('Hello World!!');
myHeading.appendChild(headinText);

// Inserting the heading in to the div

myDiv.appendChild(myHeading);
document.body.appendChild(myDiv);

/**
 * have to learn insert before and after in this same lesson
 */
