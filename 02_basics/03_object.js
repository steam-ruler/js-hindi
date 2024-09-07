// singleton
// Object.create 


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Sam",
    "full name": "Sam Johnson",
    // mySym: "mykey1", // this is string if you want to use as a symbol data type then follow the syntax of line no. 13
    [mySym]: "mykey1",
    age: 23,
    email: "sam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);     // output => sam@google.com
// console.log(JsUser["email"]);  // output => sam@google.com

// console.log(JsUser["full name"]); // output => Sam Johnson

// console.log(JsUser.mySym);  // output => mykey1
// console.log(typeof JsUser.mySym); // output => string

JsUser.email = "sam@chatgpt.com";
// Object.freeze(JsUser);  // if you uncomment this line than you have get access to make a function
JsUser.email = "sam@microsoft.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
};

// console.log(JsUser.greeting); // output => [Function (anonymous)]
console.log(JsUser.greeting()); // output => Hello JS user

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
};

console.log(JsUser.greetingTwo()); // output => Hello Js user, Sam









