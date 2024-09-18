// whether a number is greater than or equal to 20 and less than one of the others. 

let num1 = parseInt(prompt("Enter The First Number."));
let num2 = parseInt(prompt("Enter The Second Number."));
let num3 = parseInt(prompt("Enter The Third Number."));

function rangecheck() {

    if ((num1 >= 20) && (num1 < num2 || num1 < num3)) {
        alert(true)
    } else if ((num2 >= 20) && (num2 < num1 || num2 < num3)) {
        alert(true)
    } else if ((num3 >= 20) && (num3 < num1 || num3 < num2)) {
        alert(true)
    } else {
        alert(false)
    }

} rangecheck()