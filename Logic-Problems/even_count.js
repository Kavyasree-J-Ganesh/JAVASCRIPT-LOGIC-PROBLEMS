function addCount (array){
    let evenSum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            evenSum ++;
        }
    }
    return evenSum;
}
console.log(addCount([9,8,7,6,5,4,3,2,1]))