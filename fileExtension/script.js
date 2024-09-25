// Get the extension of a filename.

let string = prompt('Enter a File Name.');

function fileExtension() {

    let index = string.indexOf('.');
    let newString = string.substr(index + 1)
    console.log(newString);

} fileExtension()