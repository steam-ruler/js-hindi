// Dates

let myDate = new Date();
// console.log(myDate); // output => 2024-08-08T14:30:16.151Z
// console.log(myDate.toString()); // output => Thu Aug 08 2024 14:31:20 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleString()); // output => 8/8/2024, 2:32:31 PM

// console.log(typeof (myDate)); // output => object


// let myCreatedDate = new Date(2023, 0, 23);
// month started from 0 in Javascript
// console.log(myCreatedDate.toDateString()); // output => Mon Jan 23 2023


// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // output => 1/23/2023, 5:03:00 AM

// dd-mm-yy
// let myCreatedDate = new Date("2024-01-14");
// console.log(myCreatedDate.toLocaleString()); // output => 1/14/2024, 12:00:00 AM

// mm-dd-yy  
/* for indian way */

let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString()); // output => 1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // It gives output in millisecond since 1 jan 1970
// console.log(myCreatedDate.getTime());

console.log(Date.now()); // current time in milliseconds
console.log(Date.now() / 1000); // current time in seconds but in decimal
console.log(Math.floor(Date.now() / 1000)); // current time in seconds


/* if you don't want to convert date into string
but only month, year or day */

let newDate = new Date();
console.log(newDate);
// console.log(newDate.getMonth()); // output => 7   

/* 
for exact month
*/

console.log(newDate.getMonth() + 1); // output => 8


console.log(newDate.getDay()); // output => 4


// modern syntax for complex app's
// `${newDate.getDay() and the time is}`

newDate.toLocaleString('defualt', {
    weekday: "long",
});









