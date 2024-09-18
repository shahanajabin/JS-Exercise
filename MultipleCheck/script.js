//  check whether a Given Positive number is a multiple of 3 or a multiple of 7.

let number = prompt("Enter The Number To Check If It Is Multiple of 3 or 7!");

function checkNum() {
    if (number != null) {
        if (number % 3 == 0 && number % 7 == 0) {
            alert(`The Number ${number}, is Multiple of 3 and Multiple of 7.`)
        } else if (number % 3 == 0) {
            alert(`The Number ${number}, Multiple of 3.`)
        } else if (number % 7 == 0) {
            alert(`The Number ${number}, Multiple of 7.`)
        } else {
            alert(`The Number ${number}, Is Not a Multiple of 3 or 7.`)
        }
    } else {
        alert("Please enter a Number.")
    }

} checkNum()
