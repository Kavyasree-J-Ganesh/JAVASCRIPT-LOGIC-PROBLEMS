// ES6 Features

// 1. let and const keywords  ==> are introduced in ES6
let b = 5;
const c = 2;

console.log(b);
console.log(c);

//c =3;   => this is not allowed bcz its declared as const
if ( b > c){
    let d = 20;
    console.log(d);
}
//console.log(d);    => it shows error bcz d is defined inside if block and let is a block scoped variable



// 2. Default parameter
function addNumbers(a,b=4){
    console.log(a+b)
}
addNumbers(2,6);
addNumbers(1);



// 3. Arrow Functions  ==> its a new way of declaring functions with arrow
let largestOfTwo = (a, b) => {
    let largest

    if (a > b) {
        largest = a;
    } else {
        largest = b;
    }
    return largest;
}
console.log(largestOfTwo(9, 3));



// 4. Template literal  => simple string templates along with placeholder
let smallestOfTwo = (a, b) => {
    let largest

    if (a > b) {
        console.log(`${b} is smallest`)
    } else {
        console.log(`${a} is the smallest`)
    }
}
smallestOfTwo(3,4)



//  5. destructuring   ==> its an expression that allow you to extract data from objects and arrays

// array desructuring
const vehicles = ["Taigun", "Kushaq" ,"Creta"];
const [volkswagen, skoda, hyundai] = vehicles;
console.log(volkswagen);
console.log(skoda);
console.log(hyundai);

// object destructuring
const person = {name : "kavya" , age : "25" , gender : "female"}
const {name:firstName , age , gender} = person;                     // aliasing
console.log(firstName);
console.log(age);
console.log(gender);



// 6. spread operator  => it allow you to take a part of an array or object 
// it also allow to copy or merge content of array in to another array and content of object 

// array
const numbers = [1,2,3,4,5,6,];
const [one , two , ...others] = numbers;
console.log(others);


const number1 = [1,2,3];
const number2 = [4,5,6];
const number = [...number1, ...number2];
console.log(number);


// object
const personDetail = { name:"kavya", age:"25", gender:"female", heiht:"160"};
const {heiht, ...rest} = personDetail;
console.log(rest);


const personDetails = { name:"kavya", age:"25", gender:"female", heiht:"160"} ;
const personAddress = { city:"Calicut" , state:"Kerala"};
const completeDetails = {...personDetails, ...personAddress};
console.log(completeDetails);



// 7. class  ==> class is a blue print where objects are ctreated

class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    get getName(){
        return this.name;
    }

    get getYear(){
        return this.year;
    }

    set setName(name){
        this.name = name;
    }

    set setYear(year){
        this.year = year;
    }
}

let car1 = new car("Taigun", 2023);
let car2 = new car("Taigun", 2022);

console.log(car1.getName);
car1.name = "Kushaq"
console.log(car1.getName);



// // 8. promises
// promise are used to handle asynchronous operations in js
// its an object which takes a callback function as an argument
// callback function takes two arguments ie, resolve and reject

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



// 9. Module  ==> es6 modules allow you to break your code into separate files

//*** 1.export
// we can export variables or functions from any file
// exported variables or functions can be used in other file

// they are of two types
// .......1. default export ==> only a single variable or function can be default exported from a file
// eg : 

// .......2. Named export
// using this we can export more than one variables or functions




//*** 1. import
// wev can import and use variables and functions into a file which are exported from other file

// they are of two types
// .......1. default import  ==> default exported functions or variables are imported using default import

// .......2. named import  ==> named exported functions or variables are imported using named import