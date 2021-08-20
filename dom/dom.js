
/**
 * Exploring DOM
 */
console.dir(document);
console.log(document.domain);
let myUrl = document.URL;
console.log("My url is "+myUrl);
document.title = 'newTitle';
console.log(document.title);
console.log(document.activeElement);
console.log(document.forms);
console.log(document.images);

/**
 * Working With DOM
 */

let myText = document.getElementById('welcome-message');
//myText.textContent = 'Bye!!';
// console.log(document.getElementById('testing').innerText);
// console.log(document.getElementById('testing').textContent);
let myHistory = window.history;
myText.innerHTML = '<h1 class = "inserted-text"> This is and Inserted HTML</h1>';
