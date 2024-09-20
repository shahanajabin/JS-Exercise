// check whether three given numbers are increasing in strict mode or in soft mode.

let num1 = parseInt(prompt("Enter the First Number."))
let num2 = parseInt(prompt("Enter the Second Number."))
let num3 = parseInt(prompt("Enter the Third Number."))

function numberSequenceMode() {

    if (num1 < num2 && num2 < num3) {
        alert('It is in Strict Mode.')
    } else if (num2 > num1 || num3 > num1) {
        alert('It is in Soft Mode.')
    }
    else {
        alert('Undefined')
    }

} numberSequenceMode()




