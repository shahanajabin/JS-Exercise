//  Convert a given number to hours and minutes. 

let number = parseInt(prompt('Enter the time to Convert in hours and minutes'));

function convertTohours() {


    if (number % 60 == 0) {
        alert(`${hour} hours`)
    } else {
        alert(false)
    }
    // let hour = number / 60;
    // let minute = parseFloat(number / 60);
    // alert(hour);
    // alert(minute);
} convertTohours()