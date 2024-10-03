// Find the number of trailing zeros in the factorial of a given number.

let number = parseInt(prompt('Enter The Number.'));

function trailingZeros() {

    let result = 1;
    let count = 0;

    for (let i = 1; i < number; i++) {
        result *= i

    } console.log(result);

    let split = result.toString();
    for (let j = split.length - 1; j >= 0; j--) {
        if (split[j] == 0) {
            count++
        } else {
            break
        }

    }

    alert(count);

}
trailingZeros()