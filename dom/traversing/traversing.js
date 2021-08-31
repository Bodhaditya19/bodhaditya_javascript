/**
 * Parent Node
 */
let myChild = document.getElementById('first-text')
let myParent = myChild.parentNode;
console.log(myParent);

/**
 * Styling
 */
myParent.style.color = 'red';

/**
 * Grand Parent
 */
let grandParent = document.getElementById('first-text').parentNode.parentNode;
console.log(grandParent);

// parentElement also exists

/**
 * Child Nodes
 */

//  let childNodes = document.getElementById('grand-parent').childNodes;
//  console.log(childNodes[0]); // childNodes method considers line breaks as a text-node

let myChildren = document.getElementById('grand-parent').children;
console.log(myChildren);

/**
 * firstElementChild  ==>  first child also gives blank lines as text nodes
 * so we use firstElementChild 
 */

let myFristChild = document.getElementById('grand-parent').firstElementChild;
console.log(myFristChild);  // lastChild and lastElementChild also exists