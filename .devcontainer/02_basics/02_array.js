const marvel_heros = ["Ironman", "Hulk", "Thor"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros); // output => [ 'Ironman', 'Hulk', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]

// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); // output => Batman

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // output => [ 'Ironman', 'Hulk', 'Thor', 'Superman', 'Batman', 'Flash' ]


// SPREAD OPERATOR 
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros); // output => [ 'Ironman', 'Hulk', 'Thor', 'Superman', 'Batman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Greenland")); // output => false
console.log(Array.from("Greenland")); // output => ['G', 'r', 'e', 'e', 'n', 'l', 'a', 'n', 'd']

console.log(Array.from({name: "Sam"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // output => [ 100, 200, 300 ]





