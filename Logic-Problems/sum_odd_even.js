function differenceInSum (array){
    let oddSum = 0;
    let evenSum = 0;
    for(let i=0; i<array.length; i++){
        if( array[i] % 2 === 1){
            oddSum += array[i];
        }else {
            evenSum += array[i];
        }
    }
    return (oddSum - evenSum);
}
console.log(differenceInSum([1,2,3,4,5,6,7,8,9]))