let password = 'Hello123';
let userEmail = 'mukherjee.bodhaditya@gmail.com';

if(password.length >5 && userEmail.includes('@')){
    console.log('User ID & Password OK')
}
else{
    console.log('Incorrect ID and Password');
}