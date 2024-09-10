function leapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        console.log("This Year is a leap year");
    } else {
        console.log("This Year is not a Leap Year");
    }
    return year
} leapYear(2032)

