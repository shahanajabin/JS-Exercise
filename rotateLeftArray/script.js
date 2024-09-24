// Rotate the elements left of a given array of integers of length 3.

let number = prompt("Enter The Array Elements separated by commas.");
let array = number.split(",");

function rotateLeftArray() {
    let newArr = [];
    if (array.length == 3) {
        newArr.push(array.slice(2) + ',' + array.slice(0, 2));
        alert(newArr);

    } else {
        alert('Enter the Array of 3 Numbers.')
    }

} rotateLeftArray()

