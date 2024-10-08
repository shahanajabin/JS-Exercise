// Find the number which appears most in a given array of integers.

let number = prompt("Enter The Array Elements separated by commas.");
let array = number.split(",");

function mostFrequent() {

    let number = {};

    for (let i = 0; i < array.length; i++) {
        if (number.hasOwnProperty(array[i])) {
            number[array[i]]++
        } else {
            number[array[i]] = 1
        }

    }
    let arr = Object.values(number);
    let max = Math.max(...arr)

    for (i in number) {
        if (number.hasOwnProperty(i)) {
            if (number[i] === max) {
                alert(i);

            }
        }
    }
}
mostFrequent()