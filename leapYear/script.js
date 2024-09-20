let year = prompt("Enter The Year");
function leapYear() {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        alert("This Year is a leap year");
    } else {
        alert("This Year is not a Leap Year");
    }
    return year
} leapYear()