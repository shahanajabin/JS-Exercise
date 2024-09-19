//  Create a new string from a given string with the first character of the given string added at the front and back.

let string = prompt("Enter The String!");

function addFirstChar() {

    let firstChar = string.charAt(0);
    let newString = string.charAt(0) + string.concat(firstChar);
    alert(newString)

} addFirstChar()