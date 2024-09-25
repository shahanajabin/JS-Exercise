// Changing the position of first and last characters.

let string = prompt('Enter The String.');

function swapEnds() {

    let newString = '';
    if (string.length > 1) {
        newString += string.slice(string.length - 1) + string.slice(1, string.length - 1) + string.charAt(0)
        alert(newString);
    } else {
        alert('Enter a String with Character more than 1.');

    }

} swapEnds()