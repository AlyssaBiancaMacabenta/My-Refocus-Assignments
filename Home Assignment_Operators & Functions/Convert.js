function convertToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(84))

function convertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) / 1.8 + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(95))
