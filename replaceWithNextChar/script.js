// Replace every character in a given string with the character following it in the alphabet.

let string = prompt("Enter a String!");

function replaceWithNextChar() {

    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString += String.fromCharCode(string.charCodeAt(i) + 1);
    }
    alert(newString)
} replaceWithNextChar()



