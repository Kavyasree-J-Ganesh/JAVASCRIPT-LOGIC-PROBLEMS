// its a function paassed as an argument to another function
// and its to be executed after another function has finished


let test = (p) => {
    console.log("inside main function");
    p();
}
test(() => {
    console.log("this is a callback function");
})