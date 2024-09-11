// check if the sum or Given number is 50.

let userInput1 = parseInt(prompt("Enter The First Number"));
let userInput2 = parseInt(prompt("Enter The second Number"));

function checkFifty() {

    let sum = userInput1 + userInput2;
    if (userInput1 == 50 || userInput2 == 50 || sum == 50) {
        alert(true)
    } else {
        alert(false)
    }
} checkFifty()