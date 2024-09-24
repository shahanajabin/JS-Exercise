//  Check whether 1 appears in the first or last position of a given array of integers

let number = prompt('Enter The Array sepreted by Commas.');
let array = number.split(",");
console.log(array);


function checkFirstLastOne() {

    if (array.length >= 1) {
        if (array[0] == 1 || array[array.length - 1] == 1) {
            alert(true)
        } else {
            alert(false)
        }
    }

} checkFirstLastOne()