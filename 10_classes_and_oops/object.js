
function multipleByFive(num) {
    return num * 5;
}

multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function() {
    score++;
};


createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword intitiates the creation of a new javaScript object.

A prototype is linked: The newly created object gets linked to the prototype propety of the constructor
function. This means that it has access to the properties and methods defined on the constructor's prototype.


The constructor is called: The constructor function is called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,
the newly created object, ot be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive
value (object, array, function, etc.), the newly created object is returned.



*/