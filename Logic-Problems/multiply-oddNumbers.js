function multiplyOddNumbers(array){
    let multiply = 1;
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 ===1){
            multiply *= array[i]
        }
    }
    return multiply
}
console.log(multiplyOddNumbers([1,2,3,4,5,6]))