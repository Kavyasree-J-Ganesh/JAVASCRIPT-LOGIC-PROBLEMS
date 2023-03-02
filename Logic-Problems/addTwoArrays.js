function addArrays(array1,array2){
    let array = [];
    for(let i=0; i<array1.length; i++){
        array[i] = array1[i] + array2[i]
    }
    return array
}
console.log(addArrays([1,2,3,4],[5,6,7,8]))