// javascript automatically ditected that score variable is a number datya type 😘
const score = 400;
// console.log(score);


// but you can explicitly define datatype as a Number

const balance = new Number(100);
// console.log(balance); // output => [Number: 100]


// console.log(balance.toString()); // ouput => 100
// console.log(balance.toString().length); // output => 3
// console.log(balance.toFixed(2)); // output => 100.00

// const otherNumber = 23.8966;
const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3)); // output => 23.9
// console.log(otherNumber.toPrecision(3)); // output => 124

const hundreds = 100000;
// console.log(hundreds.toLocaleString());  // output => 1,000,00  
/*  line no. 23 
This is US base standard value*/

// console.log(hundreds.toLocaleString('en-IN')); // output => 1,00,000



// +++++++++++++++++++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // output => Object [Math] {}

// abs()  it turns neg value into +ve value

console.log(Math.abs(-4));


