// promise are used to handle asynchronous operations in js
// its an object which takes a callback function as an argument
// callback function takes two arguments ie, resolve and reject


//1

let promise1 = new Promise((resolve,reject) => {
    let a = 10;
    let b= 20;
    if( a < b){
        resolve (a)
    } else {
        reject(b)
    }
});

promise1.then((a) => {
    console.log("promise resolved with value " + a)
}
).catch((b)=> console.log("promise rejected with value " + b) )

//2

new Promise((resolve,reject) => {
resolve("kavya");
}).then((a) => {
    console.log("promise resolved with value " + a)
}
).catch((b)=> console.log("promise rejected with value " + b) )

//3

new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject("error");
    },1000)
    resolve(12)
}).then((a) => {
    console.log("promise resolved with value " + a)
}
).catch((b)=> console.log("promise rejected with value " + b) )

//4

new Promise((resolve,reject) => {
    reject("error");
}).then((a) => {
    console.log("promise resolved with value " + a)
}
).catch((b)=> console.log("promise rejected with value " + b) )


//5

new Promise((resolve,reject) => {
    setTimeout(()=>{
       reject(4000)
    },3000)
}).then((a) => {
    console.log("promise resolved with value " + a)
}
).catch((b)=> console.log("promise rejected with value " + b) )




