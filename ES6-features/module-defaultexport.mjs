//*** 1.export
// we can export variables or functions from any file
// exported variables or functions can be used in other file

// they are of two types
// .......1. default export ==> only a single variable or function can be default exported from a file
// eg : 

// .......2. Named export
// using this we can export more than one variables or functions


function largestOfTwoNumbers(number1,number2){
    let largest;
    if(number1 < number2){
        largest = number2;
    }else{
        largest = number1;
    }
    return largest ;
}
// let a = largestOfTwoNumbers(11,13);
// console.log(a);
export default largestOfTwoNumbers;