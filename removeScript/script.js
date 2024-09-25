// Check whether a string "Script" presents at 5th(index 4) position in a given string.

let string = prompt('Enter The string.');

function removeScript() {
    string.split(' ')

    if (string.slice(4, 10) !== "Script") {
        console.log(string);
    } else {
        console.log(string.slice(0, 4) + string.substr(11));
    }


} removeScript()