// Check whether two arrays of integers of same length are similar or not.

let firstNumber = prompt("Enter The First Array Elements separated by commas.");
let firstArray = firstNumber.split(",");
let secondNumber = prompt("Enter The Second Array Elements separated by commas.");
let secondArray = secondNumber.split(",");

function similarArrays() {

    let identical = true;
    let similiar = true;
    let count = 1;

    if (firstArray.length === secondArray.length) {

        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                identical = false;
                if (count) {
                    [firstArray[i], firstArray[i + 1]] = [firstArray[i + 1], firstArray[i]];
                    count--;
                } else {
                    similiar = false;
                }
            }
        }
        if (identical) {
            alert('These Array\'s are identical.');
        } else if (similiar) {
            alert('These Array\'s are Similiar.');
        } else {
            alert('These Array\'s are Not Similiar.');
        }

    } else {
        alert('The length of the Array\'s are not Equal.');

    }

}
similarArrays();
