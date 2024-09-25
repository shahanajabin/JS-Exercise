//  Check from three given numbers have same rightmost digit.

let num1 = parseInt(prompt('Enter The First Number.'));
let num2 = parseInt(prompt('Enter The Second Number.'));
let num3 = parseInt(prompt('Enter The Third Number.'));

function rightmostDigitCheck() {

    let numb1 = num1 % 10;
    let numb2 = num2 % 10;
    let numb3 = num3 % 10;

    if (numb1 == numb2 || numb2 == numb3 || numb1 == numb3) {
        alert(true);
    } else {
        alert(false);

    }

} rightmostDigitCheck()