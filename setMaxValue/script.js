// Find the larger value between the first or last and set all the other elements with that value.

let number = prompt("Enter The Array Elements separated by commas.");
let array = number.split(",");

function setMaxValue() {

    let newArray = [];
    if (array[0] > array[array.length - 1]) {
        for (let i = 0; i < array.length; i++) {
            newArray += array[0] + ','
        }
    } else if (array[0] < array[array.length - 1]) {
        for (let i = 0; i < array.length; i++) {
            newArray += array[array.length - 1] + ','
        }
    }

    alert(newArray.split(","));


} setMaxValue()
