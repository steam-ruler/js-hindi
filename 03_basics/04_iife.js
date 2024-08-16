// Immediately Invoked Function Expressions (IIFE)


// function  coffee() {

//     console.log("DB CONNECTED");

// };
// coffee();



(function coffee() {
    // named IFFE
    console.log("DB CONNECTED");

})();



// (() => {
//     console.log('DB CONNECTED TWO');

// })()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})("Sam");