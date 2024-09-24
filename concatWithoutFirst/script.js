// Concatenate two strings except their first character.  

let firstString = prompt('Enter The First String.');
let secondString = prompt('Enter The Second String.');

function concatWithoutFirst() {

    let charFirst = firstString.substr(1);
    let charSecond = secondString.substr(1);
    let concatenate = charFirst.concat(' ' + charSecond)
    alert(concatenate);

} concatWithoutFirst()
