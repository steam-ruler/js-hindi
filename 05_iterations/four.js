
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple",
};


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


for (const key in myObject) {
// console.log(key);
// console.log(myObject[key]);
console.log(`${key} shortcut is for ${myObject[key]}`);

}


const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
};


const map = new Map();
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('FR', "France")
map.set('IN', "India")


// for  (const key in map) {
//     console.log(key);
    
// }

