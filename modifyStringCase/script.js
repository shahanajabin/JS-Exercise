// Create a new string with the first 3 characters in lower case from a given string.

let string = prompt("Enter A string.");

function modifyStringCase() {

    let newString = '';
    if (string.length < 3) {
        newString = string.toUpperCase();
        alert(newString);
    } else {

        let strto3 = string.slice(0, 3).toLowerCase();
        let strres = string.substr(3);
        alert(strto3 + strres);
    }
} modifyStringCase()