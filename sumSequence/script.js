// calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer.

letnumber = prompt('Enter a Number.')

function sumSequence() {

    let sum = 0;

    while (number > 0) {
        sum += number;
        number = Math.floor(number / 2);

    }
    alert(sum);
}
sumSequence()