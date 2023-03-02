function firstFibinacci (number){
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum);
    console.log(secondNum);
    for(i=2; i<number; i++){
        let swap = firstNum + secondNum;
        console.log(swap);
        firstNum = secondNum;
        secondNum = swap;
    }
}
(firstFibinacci(6))