// If value is Greater than 19 triple their Absolute Difference.

let value = parseInt(prompt("Enter The Digit!"));
let num = 19;

function difference() {

    let sum = Math.abs(value - num);
    if (value > 19) {
        alert(sum * 3);
    } else {
        alert(sum)
    }
} difference()