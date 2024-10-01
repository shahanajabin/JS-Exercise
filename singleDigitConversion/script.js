// Find the number of times to replace a given number with the sum of its digits until it converts to a single digit number.

function singleDigitConversion(number) {

    let count = 0;

    while (number >= 10) {

        let sum = 0;
        let split = number.toString().split('');

        for (let i = 0; i < split.length; i++) {
            sum += Number(split[i])
        }
        number = sum;
        count++;
    }
    console.log(count);

} singleDigitConversion(59991098765432)