// Sort an array of all prime numbers between 1 and a given integer.

let number = parseInt(prompt('Enter a Number.'));

function primeSort() {

    let array = [];

    for (let i = 2; i <= number; i++) {
        let isPrime = false;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = true
            }
        }
        if (isPrime == false) {
            array.push(i)
        }

    }
    alert(array);

} primeSort()
