const accountId=144553
let accountEmail="example@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed by node.js

accountEmail="example@yahoo.com"
console.log(accountEmail);
accountPassword="212121"
console.log(accountPassword);
accountCity="Bangalore"
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope

*/
// console.log(accountId);