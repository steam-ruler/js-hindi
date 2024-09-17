
// let myName = "Martin     ";
// let myChannel = "chai      ";

// console.log(myName.trueLength);



let myHeros = ["Thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
};

Object.prototype.martin = function(){
    console.log(`martin is present in all objects`);
    
}


Array.prototype.heyMartin = function(){
    console.log(`Martin says hello`);
    
}

// heroPower.martin()
// myHeros.martin();
// myHeros.heyMartin()
// heroPower.heyMartin()


// INHERITANCE 

const user = {
    name: "chai",
    email: "chai@google.com",
}

const teacher = {
    makeVideo: true,

};

const teachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssigment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
};

teacher.__proto__ = user;


// modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "ChaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUserName.trueLength();
"martin".trueLength();
"iceTea".trueLength();
