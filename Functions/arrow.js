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
