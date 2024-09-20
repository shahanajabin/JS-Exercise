// Check whether the last digit of the three given positive integers is the same.

let num1 = prompt("Enter The First Number.");
let num2 = prompt("Enter The second Number.");
let num3 = prompt("Enter The Third Number.");

function lastDigitMatch() {

    if (num1 > 0 && num2 > 0 && num3 > 0) {
        let num1lst = num1[num1.length - 1];
        let num2lst = num2[num2.length - 1];
        let num3lst = num3[num3.length - 1];
        if (num1lst == num2lst &&
            num1lst == num3lst &&
            num2lst == num3lst
        ) {
            alert(true)
        } else {
            alert(false)
        }
    } else {
        alert("Please enter Positive Numbers.")
    }

} lastDigitMatch()


