// var c = 300;
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
//  console.log("INNER:", a); // output => INNER: 10
 

};

// console.log(a); // output => 300
// console.log(b);
// console.log(c);


function one() {
    const username = "Martin";

    function two() {
        const website = "youtube";
        console.log(username);

    }
    
    // console.log(website);
    // two()
    
}
one();



if (true) {
    const username = "Peter";
    if (username === "Peter") {
        const website = " youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
    
};

// console.log(username);


// ________________________________________________________________ Interesting ________________________________________________________________________


function addOne(num) {
    return num + 1;
};
console.log(addOne(5));


const addTwo = function (num) {
    return num + 2;
};
addTwo(5);
