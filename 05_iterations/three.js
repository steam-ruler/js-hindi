// for of


// ["", "", ""];
// [{}, {}, {}]


// for (const element of object) {
    
// }

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
};


// MAPS

const map = new Map();
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
};


const myObject = {
    game1: "NFS",
    game2: "GTA",
};


for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}