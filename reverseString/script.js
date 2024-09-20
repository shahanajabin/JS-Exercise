// Reverse a given string

let string = prompt('Enter a String to Reverse');

function reverseString() {

    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    alert(reverse);

} reverseString()