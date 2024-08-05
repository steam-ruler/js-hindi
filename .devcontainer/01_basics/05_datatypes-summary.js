// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.1;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // output => false

const bigNumber = 3464619764645545454545646n;
// console.log( typeof bigNumber); output => bigint


// Reference (Non-primitive)
// Array, Objects, Functions 

const heros = ["ironman", "hulk", "thor"];

 let myObj = {
    name: "sam",
    age: 22,
};


 const myFunction = function() {
    console.log("Hello World");
    
 }