// Create a new string from a given string taking the last 3 characters and adding them at both the front and back.

let string = prompt("Enter a String!");

function addLastThree() {

    if (string.length >= 3) {
        let strLength = string.substr(string.length - 3);
        let newString = strLength + string.concat(strLength);
        alert(newString);
    } else {
        alert("Enter a String Which has length 3 or more.")
    }

} addLastThree()

