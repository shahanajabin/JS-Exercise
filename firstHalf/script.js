// Extract the first half of a string of even length.

let string = prompt('Enter a String.');

function firstHalf() {

    let stringLength = string.length
    if (stringLength % 2 == 0) {
        let newString = stringLength / 2;
        let extract = string.slice(0, newString)
        alert(extract)

    } else {
        alert(string)

    }

} firstHalf()

