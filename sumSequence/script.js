// calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer.

function sumSequence(number) {

    let sum = 0;

    while (number > 0) {
        sum += number;
        number = Math.floor(number / 2);

    }
    console.log(sum);
}
sumSequence(9)