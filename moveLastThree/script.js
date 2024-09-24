// Move the last three characters to the start of a given string. 

let string = prompt('Enter a String.');

function moveLastThree() {
    if (string.length >= 3) {
        let lastChar = string.substring(string.length - 3);
        let firstPart = string.slice(0, string.length - 3)
        string = lastChar.concat(firstPart)
        alert(string);

    } else {
        alert('Enter a String with the length is greater than 3.');

    }
} moveLastThree()