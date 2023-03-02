// Hoisting
// memory allocation of functions and variables before code execution.
// there are two cycle in js code execution => 1.memory allocation  2.code execution

//undefined

console.log(a);
var a = 10;
addNumbers(3,4);
function addNumbers(a,b) {
    console.log(a+b);
}
