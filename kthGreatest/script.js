//  Find the kth greatest element of a given array of integers.

let number = prompt("Enter The Array Elements separated by commas.");
let array = number.split(",");
let index = parseInt(prompt("Enter The Index[K]."));

function kthGreatest() {

    let descending = array.sort((a, b) => b - a);
    alert(`Descending Order of Your Array ${descending}`)
    let result = '';

    if (descending.length > index && index > 0) {

        for (let i = 0; i < descending.length; i++) {
            if (i == index) {
                result += descending[i - 1]
                alert(result);
            }
        }

    } else {
        alert('Please Enter A Valid Length.');

    }

} kthGreatest()
