// Check whether a specified character exists within the 2nd to 4th position in a given string.

let string = prompt("Enter a String.");
let position = prompt("Enter The Character.");


function characterExistence() {

    if (string.slice(2, 5).includes(position)) {
        alert(true);
    } else {
        alert(false);
    }

} characterExistence();