// const accountName 
// const account_id 
// const account_Id

const accountId = 13444;
let accountEmail = "sumit@gmail.come";
var accountPassword = "1234";
accountCity = "Uttar Pradesh";
let accountState;


// accountId = 2; not allowed

accountEmail = "sm@gmail.com";
accountPassword = "2345";
accountCity = "Banglore";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefer not use var
because of issue in block scope and functional scope
*/