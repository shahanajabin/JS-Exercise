// Divide two positive numbers and return a string with properly formatted commas.

let divident = parseInt(prompt('Enter The Dividend.'));
let divisor = parseInt(prompt('Enter The Divisor.'));

function divideWithCommas() {

    if (divisor >= 0) {

        let quotient = (divident / divisor).toString();
        let formattedQuotient = '';

        for (let i = quotient.length - 1; i >= 0; i--) {

            if (i % 3 == 0 && i !== 0) {
                formattedQuotient += quotient[i] + ',';
            } else {
                formattedQuotient += quotient[i];
            }

        }
        alert(formattedQuotient.split('').reverse().join(''));
    } else {
        alert('Please Enter a Number Which is not Zero.');

    }

} divideWithCommas()

