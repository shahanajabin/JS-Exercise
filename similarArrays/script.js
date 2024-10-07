// Check whether two arrays of integers of same length are similar or not.

let firstNumber = prompt("Enter The First Array Elements separated by commas.");
let firstArray = firstNumber.split(",");
let secondNumber = prompt("Enter The Second Array Elements separated by commas.");
let secondArray = secondNumber.split(",");

function similarArrays() {

    let similiar = false;
    if (firstArray.length == secondArray.length) {

        for (let i = 0; i < firstArray.length; i++) {
            for (let j = 0; j < secondArray.length; j++) {
                if (firstArray[i] === secondArray[j]) {
                    similiar = true;
                } else {
                    similiar = false;
                }
            }
        }
        if (similiar == true) {
            alert('These Array\'s are Similiar!');

        } else {
            alert('These Array\'s are Not Similiar ');

        }

    } else {
        alert(`Length of 2 Array's are Not Equal so They are Not Similiar Array's!`);

    }

}
similarArrays();
