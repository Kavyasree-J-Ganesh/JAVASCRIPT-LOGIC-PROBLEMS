function sumOfEvenNumbers(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 ===0){
            sum += array[i]
        }
    }
    return sum
}
console.log(sumOfEvenNumbers([4,7,1,8,0,3,6,5]))