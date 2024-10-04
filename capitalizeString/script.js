//  Capitalize the first letter of each word of a given string. 

let string = prompt('Enter The String.');

function capitalizeString() {

    let newArr = '';
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        let arr = array[i].charAt(0).toUpperCase().toString()
        array[i].toString()
        newArr += arr + array[i].substr(1) + ' '

    }

    alert(newArr);

} capitalizeString()

