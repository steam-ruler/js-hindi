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

// console.log(Math); // output => Object [Math] {}

// abs()  it turns neg value into +ve value

// console.log(Math.abs(-4)); // output => 4
// console.log(Math.round(4.3)); // output => 4
// console.log(Math.round(4.6)); // output => 5

// console.log(Math.ceil(4.2)); // output => 5
// console.log(Math.floor(4.9)); // output => 4

// console.log(Math.min(4, 8, 9, 2)); // output => 2
// console.log(Math.max(39, 0, 2, 5, 3)); // output => 39

// console.log(Math.random());
// console.log(Math.random() * 10 + 1 );
// console.log((Math.random() * 10) + 1 );

console.log(Math.floor(Math.random() * 10) + 1 );


// REMEMBER THIS FORMULA 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

