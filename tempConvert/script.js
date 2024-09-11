let tempCel = prompt("Enter The Temperature in Celsius.");
let tempFah = prompt("Enter The Temperature in Fahrenheit.");

function celsiusToFahrenheit() {
    if (tempCel !== "") {
        let fahrenheit = (9 / 5) * tempCel + 32;
        alert(`${tempCel}°C is ${fahrenheit}°F`)
    } else {
        alert("Please Enter a temperature");
    }
} celsiusToFahrenheit()

function fahrenheitToCelsius() {
    if (tempFah !== "") {
        let celsius = (tempFah - 32) * 5 / 9
        alert(`${tempFah}°F is ${celsius}°C`)
    } else {
        alert("Please Enter a temperature");
    }
} fahrenheitToCelsius()

