// Find a value which is nearest to 100 from two different given integer values.

let input1 = parseInt(prompt('Enter The First Number'));
let input2 = parseInt(prompt('Enter The Second Number'));

function nearestToHundread() {

    let diffInput1 = Math.abs(input1 - 100);
    let diffInput2 = Math.abs(input2 - 100);
    if (diffInput1 < diffInput2) {
        alert(input1);
    } else if (input1 - 100 == input2 - 100) {
        alert("Both The value are same so the difference is also same.");
    } else {
        alert(input2);
    }

} nearestToHundread()