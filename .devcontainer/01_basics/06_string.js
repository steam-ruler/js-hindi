const name = "Sam";
const repoCount = 50;

// console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Battleground'); // This is how you can also declare a string

// console.log(typeof (gameName));  // output => object
console.log(gameName[0]); // output => B
console.log(gameName.__proto__); // output => {}

    
console.log(gameName.length); // output => 12
console.log(gameName.toUpperCase()); // output => BATTLEGROUND
console.log(gameName.charAt(6)); // output => g
console.log(gameName.indexOf("g")); // output => 6

const newString = gameName.substring(0, 4); // last value not include
console.log(newString); // ouput => Batt

const anotherString = gameName.slice(-11, 4);
console.log(anotherString); // output => att

const newStringOne = " classic  ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://quora.com/quora%20askedquestion";

console.log(url.replace("%20", "-")); // output => https://quora.com/quora-askedquestion

console.log(url.includes("asked")); // output => true


const goodString = new String("The-Life-of-Programmer");

console.log(goodString.split("-")); // output => [ 'The', 'Life', 'of', 'Programmer' ]