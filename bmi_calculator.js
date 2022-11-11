function getBMI(weight, height) {
    let bmi = 703 * (weight / (height * height));
    return bmi;
}

console.log(getBMI(154.32, 64.173))