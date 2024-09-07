

// const tinderUser = new Object(); // this is singleton object
const tinderUser = {};  // this is also a syntax of declaring object | this is non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // output => { id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "Johnson",
        }
    }
}

// console.log(regularUser.fullname); // output => { userfullname: { firstname: 'Sam', lastname: 'Johnson' } }

// console.log(regularUser.fullname.userfullname); // output => { firstname: 'Sam', lastname: 'Johnson' }


// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};

// // const obj3 = {obj1, obj2};  // objects inside object

// console.log(obj3);  // output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = Object.assign(obj1, obj2);

const obj3 = {...obj1, ...obj2}; // same output as line no. 38
// console.log(obj3);  // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// when values comes from database 

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },

    {
        id: 1,
        email: "s@gmail.com",
    },

    {
        id: 1,
        email: "s@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); // output => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // output => [ '123abc', 'Sam', false ] 
// console.log(Object.entries(tinderUser));  // output => [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output => true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Martin",
};


// course.courseInstructor

// const {courseInstructor} = course;
// console.log(courseInstructor);  // output => Martin


// de-structure 

const {courseInstructor: instructor} = course;
console.log(instructor); // output => Martin



// {
//     "name": "Martin",
//     "coursename": "js in hindi",
//     "price": "free",
// }


// [
//     {},
//     {},
//     {},
// ]



