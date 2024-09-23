//  Convert a given number to hours and minutes.

let number = parseInt(prompt('Enter the time to Convert in hours and minutes'));

function convertTohours() {

    if (!isNaN(number)) {
        let hours = Math.floor(number / 60);
        let minutes = number % 60;
        let time = `${hours} Hours and ${minutes} Minutes.`
        alert(time)
    } else {
        alert('Please, Enter a Number!')
    }

} convertTohours()

