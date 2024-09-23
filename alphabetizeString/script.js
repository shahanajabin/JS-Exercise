// Convert the letters of a given string in alphabetical order. 

let string = prompt('Enter a String to Sort');

function alphabetizeString() {

    if (string !== null) {
        let newString = string.split('').sort().join('');
        alert(newString);
    } else {
        alert('Please, Enter a String.')
    }

} alphabetizeString()

