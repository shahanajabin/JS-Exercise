// If the Number is Greater than 13 Return the Double of Absolute Difference

let userInput = prompt("Enter The Digit!");
let num = 13;

function diff() {

    if (userInput > 13) {
        alert((userInput - num) * 2);
    } else {
        alert(num - userInput);
    }
} diff()
