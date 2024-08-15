const user = {
    username: "Steve",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    },
};

// user.welcomeMessage(); // output => Steve, welcome to website
// user.username = "Sam";
// user.welcomeMessage(); // output => Sam, welcome to website

// console.log(this);



// function coffee() {
//     let username = "Steve";
//     console.log(this.username);
    
// }

// coffee();



// const coffee = function () {
//     let username = "Steve";
//     console.log(this.username);
    
// };

// coffee();



const coffee = () => {
    let username = "Steve";
    console.log(this.username); // output => undefined
    
};

// coffee();


// THIS IS BASIC ARROW FUNCTION 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addTwo(3,4)); // output => 7


// IMPLICIT RETURN 

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "Sam"}; // output => undefined
const addTwo = (num1, num2) => ({username: "Sam"}); // output =>  { username: 'Sam' }

console.log(addTwo(3, 4)); // output => 7


const myArray = [2, 4, 6, 8, 10];

