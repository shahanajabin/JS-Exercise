// Concatenate two strings and return the result. If the length of the strings.

let firstString = prompt('Enter The First String.');
let secondString = prompt('Enter The Second String.');

function equalLengthConcat() {

    let firstLength = firstString.length;
    let secondLength = secondString.length;
    let newString = '';

    if (!(firstLength == secondLength)) {
        if (firstLength > secondLength) {
            let str = firstString.substr(0, secondLength)
            newString = str.concat(' ' + secondString)
            alert(newString);

        } else {
            let str = secondString.substr(0, firstLength)
            newString = firstString.concat(' ' + str)
            alert(newString);
        }

    } else {
        alert(firstString.concat(' ' + secondString));

    }

} equalLengthConcat()