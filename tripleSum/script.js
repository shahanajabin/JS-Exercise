// If The Value Are Same Return Triple their Sum.

let userInput1 = parseInt(prompt("Enter The First Number!"));
let userInput2 = parseInt(prompt("Enter The second Number!"));

function tripleSum() {

    let sum = userInput1 + userInput2;
    console.log(sum);
    if (userInput1 == userInput2) {
        alert(sum * 3);
    } else {
        alert(sum);
    }
} tripleSum()

