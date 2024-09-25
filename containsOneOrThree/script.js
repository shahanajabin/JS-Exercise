// Test whether an array of integers of length 2 contains 1 or a 3.     

let numbers = prompt('Enter The Array Elements which is Separated by Commas.');
let array = numbers.split(",");

function containsOneOrThree() {

    if (array.length == 2) {
        if ((array[0] == 1 || array[0] == 3) || (array[1] == 1 || array[1] == 3)) {
            alert(true);
        } else {
            alert(false);
        }
    } else {
        alert('Please, Enter Array Elements of 2!')
    }

} containsOneOrThree()