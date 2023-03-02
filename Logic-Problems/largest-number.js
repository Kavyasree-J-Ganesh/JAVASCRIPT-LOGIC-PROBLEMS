function largestNumber(array){
    let largest = array[0];
    for (let i=0; i<array.length; i++){
        if(array[i] > largest){
            largest = array[i]
        }
    }
    return largest
}
console.log(largestNumber([2,5,6,1,3,9,7]))