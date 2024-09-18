// Create a new string adding "Py" in front of a given string.

let string = prompt("Enter a String to Add 'Py'!");

function addPyPrefix() {

    if (string.startsWith("Py")) {
        alert(string)
    } else {
        alert("Py" + string)
    }
} addPyPrefix()


