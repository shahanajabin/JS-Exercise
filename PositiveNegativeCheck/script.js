// check from two given integers, whether one is positive and another one is negative.

let input1 = parseInt(prompt("Enter The First Number!"));
let input2 = parseInt(prompt("Enter The Second Number!"));

function checkValue() {

    if ((input1 > 0 && input2 < 0) || (input2 > 0 && input1 < 0)) {
        alert(true)
    } else {
        alert(false)
    }
} checkValue()
