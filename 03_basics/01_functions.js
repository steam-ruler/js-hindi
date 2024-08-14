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
console.log(loginUserMessage()); // output => undefined just logged in




