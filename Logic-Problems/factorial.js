function factorial(number){
    let multiply = 1;
    for(let i=number; i>0; i--){
        multiply *= i
    }
    return multiply
}
console.log(factorial(5))