function checkPrime(number){
    for(let i=0; i<number/2; i++){
        if(number % 2 ===0){
            return false
        }
    }
    return true
}
console.log(checkPrime(18))