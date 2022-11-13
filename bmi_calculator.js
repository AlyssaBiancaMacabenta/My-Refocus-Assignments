function getBMI(weight, height) {
    let bmi = 703 * (weight / (height * height));
    return Math.round(bmi * 100) / 100;
}

console.log(getBMI(154, 64))

function testBMI() {
    const result = getBMI(154, 64);
    const expected = 26.43;

console.assert(
    result === expected, 
    `The result ${result} does not match the expected value ${expected}`
    )
}

testBMI();