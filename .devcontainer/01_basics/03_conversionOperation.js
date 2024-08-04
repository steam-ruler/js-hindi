let score = "33abc";

// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// "33" => 33
// "33abc" => Nan | typeof is Number
// true => 1; false => 0
// null => 0
// string => Nan


// let isLoggedIn = 1;  // output => true
// let isLoggedIn = ""; // output => false
let isLoggedIn = "John"; // output => true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // output => true


let someNumber = 85;

let stringNumber = String(someNumber);
// console.log(stringNumber); // output => 85
// console.log(typeof (stringNumber)); // output => string


// _______________________________________________ OPERATIONS ___________________________________________________________

let value = 3;
let negValue = -value
console.log(negValue); // output => -3

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = "john";

let str3 = str1 + str2;
// console.log(str3);

// NOT RECOMMENDED
// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log("1" + 2 + 2); // output => 122
// console.log(1 + 2 + "2"); // output => 32

// console.log(+true); // output => 1
// console.log(+""); // output => 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; 

let gameCounter = 100;
// gameCounter++;
++gameCounter;

console.log(gameCounter); // output => 101















