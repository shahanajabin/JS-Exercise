// Remove a character at the specified position of a given string and return the new string.

let string = prompt('Enter a String.');
let position = prompt('Enter the Position of Character to be Removed.');

function removeChar() {

    let newArray = '';
    for (let i = 0; i < string.length; i++) {
        if (i !== position) {
            newArray += string[i]
        }
    }
    alert(newArray);

} removeChar()