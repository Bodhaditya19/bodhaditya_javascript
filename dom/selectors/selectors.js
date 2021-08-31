
/**
 * Exploring DOM
 */
// console.dir(document);
// console.log(document.domain);
// let myUrl = document.URL;
// console.log("My url is "+myUrl);
// document.title = 'newTitle';
// console.log(document.title);
// console.log(document.activeElement);
// console.log(document.forms);
// console.log(document.images);

/**
 * Working With DOM
 */

// let myText = document.getElementById('welcome-message');
// myText.textContent = 'Bye!!';
// console.log(document.getElementById('testing').innerText);
// console.log(document.getElementById('testing').textContent);
// let myHistory = window.history;
// myText.innerHTML = '<h1 class = "inserted-text"> This is and Inserted HTML</h1>';
/**
 * Styling With Java Script
 */
let myInput = document.getElementById('first-input');
myInput.style.borderBottom = 'dotted 2px black';

/**
 * Get Element By className
 */

let myItems = document.getElementsByClassName('headers');
console.log(myItems);
console.log(myItems.innerText);
console.log(myItems[0].innerText);

// For Id it won't return and array as id is suppoesed to be used once only

// let myNewItems = document.getElementById('myHeaders')
// console.log(myNewItems);

// To change the stye of all the elements of the HTML collection have to loop through them

for(let i= 0 ; i<myItems.length; i++){
    myItems[i].style.color = 'red';
}

/**
 * Getting Element by tagName
 */

let myList = document.getElementsByTagName('li');
console.log(myList);

/**
 * Query Selector. Returns the first element of the selector array
 */

let mySelector = document.querySelector('.headers');
mySelector.style.color = 'black';
console.log(mySelector);

let lastItem = document.querySelectorAll('li    :nth-child[1]');
lastItem.style.color = 'blue';