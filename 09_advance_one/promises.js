const PromiseOne = new Promise(function (resolve, reject) {
    // DB an async task
    // DB calls, cyrptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();

    }, 1000)
});

PromiseOne.then(function () {
    console.log("Promise consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is complete");

        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 consumed ");

});


const promiseThree = new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve({username: "chai", email: "chai@example.com"});
            }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
    
});


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function (){
        let err = false;
        if (!err) {
            resolve({username: "sam", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
});


promiseFour
.then( (user) => {
    console.log(user);
    return user.username;
    
} )

.then( (username) => {
    console.log(username);
    
} )

.catch(function (err) {
    console.log(err);
    
})

.finally(() => console.log("The promise is either resolved or rejected")
)
  

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function (){
        let err = true;
        if (!err) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
});


async function consumePromiseFive() {
        try {
            const response = await promiseFive;
            console.log(response);
            
        } catch (err) {
            console.log(err);
            
        }
};

consumePromiseFive();

// async function getAllUsers() {
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json();
//     console.log(data);

    
//    } catch (error) {
//     console.log("E:", error);
    
//    }
    
// };

// getAllUsers();





fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
       return response.json()
})
.then((data) => {
    console.log(data);
    
})

.catch((error) => console.log(error));

