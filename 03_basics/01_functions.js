// console.log("P");
// console.log("Y");
// console.log("T");
// console.log("H");
// console.log("O");
// console.log("N");


function sayMyName() {
    console.log("P");
    console.log("Y");
    console.log("T");
    console.log("H");
    console.log("O");
    console.log("N");

};

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
  
// };

// addTwoNumbers(); // output => NaN
// addTwoNumbers(3, 5); // output => 8

// const result = addTwoNumbers(3, 5); // output => 8
// console.log("RESULT:", result); // output => undefined



// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;
//     return result;
    
//   };
  
//   const result = addTwoNumbers(3, 5);
//   console.log("Result:", result);


function addTwoNumbers(number1, number2){
    return number1 + number2;
};

const result = addTwoNumbers(3, 5);
console.log("Result:", result); // output => result

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`
};

// console.log(loginUserMessage("Martin")); // output => Martin just logged in
// console.log(loginUserMessage()); // output => undefined just logged in


function calculateCartPrice(val1, val2, ...num1){
   return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // output => [ 500, 2000 ]

const user = {
    username: "Sam",
    price: 199,
};

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

};
// handleObject(user); // output => username is Sam and price is 199

handleObject({
    username: "Martin",
    price: 399,
}); // output => username is Martin and price is 399

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray)); // output => 400
console.log(returnSecondValue([200, 400, 500, 1000])); // output => 400








