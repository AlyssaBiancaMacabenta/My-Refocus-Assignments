function powerOfNumber(num,pow) {
    let result = 1;
    for (let i = 0; i < pow; i++){
        result *= num;
    }
    console.log(`Hi Sam! ${num} to the power of ${pow} is ${result}.`)
}
    powerOfNumber(1,10)