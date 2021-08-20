// && both side have to be true
// || one is has to be true

let isLoggedIn = false;
let isVerified = true;
let hasPaid = false;
let isGuest = true;

if(!isLoggedIn && isVerified && !hasPaid ){ //! before an variable reverses the true or false
    console.log("Welcome to the course Below are all your courses");
}
else if(isLoggedIn || isGuest){
    console.log("Welcome to see the demo");
}