// code that doesn't break the execution of the remaining code.
// it execute asynchronously


console.log("hi");
setTimeout(() => {                // setTimeout => its a function
    console.log("hello");
},3000);

console.log("how are you");