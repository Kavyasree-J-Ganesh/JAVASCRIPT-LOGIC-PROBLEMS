function reverseString (Str){
    let arr = Str.split("");
    for(let i=0; i<arr.length/2; i++){
        let swap = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = swap;
    }
    return arr.join("");
}
console.log(reverseString("KAVYA"))