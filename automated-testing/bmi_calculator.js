function getBMI(weight, height) {
    let bmi = 703 * (weight / (height * height));
    return Math.round(bmi * 100) / 100;
}

// console.log(getBMI(154, 64))

module.exports = getBMI;