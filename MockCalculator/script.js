let userInput1 = parseInt(prompt("Enter The First Number"));
let Operator = (prompt("Enter The Operator"));
let userInput2 = parseInt(prompt("Enter The second Number"));

function mockCalculator() {

    let result = "";

    switch (Operator) {
        case "+":
            result = userInput1 + userInput2;
            break;
        case "-":
            result = userInput1 - userInput2;
            break;
        case "*":
            result = userInput1 * userInput2;
            break;
        case "/":
            if (userInput2 !== 0) {
                result = userInput1 / userInput2;
            } else {
                alert("Sorry! Can't Divide by Zero")
            }
            break;
        case "%":
            result = userInput1 % userInput2;
            break;
        default:
            result = "Invalid Operator , Choose one of(+,-,*,/,%)"
    }
    alert(result);

} mockCalculator();