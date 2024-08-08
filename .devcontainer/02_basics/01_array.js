// array

const myArr = [0, 1, 2, 3, 4, 5];
const heros = ["Ironman", "Captain", "Hulk"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]);

// Array methods

// myArr.push(6);
// console.log(myArr);  // output => [0, 1, 2, 3, 4, 5, 6]

// myArr.pop();
// console.log(myArr); // output => [ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9);
// console.log(myArr); // output => [9, 0, 1, 2, 3, 4, 5]

// myArr.shift(); 
// console.log(myArr); // output => [ 1, 2, 3, 4, 5]


// console.log(myArr.includes(34)); // output => false
// console.log(myArr.indexOf(34)); // output => -1
// console.log(myArr.indexOf(3)); // output => 3

// const newArr = myArr.join();
// console.log(myArr);

// console.log(newArr); // output => 0,1,2,3,4,5
// console.log(typeof (newArr)); // output => string


// SLICE & SPICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);

console.log(myn2);






  

