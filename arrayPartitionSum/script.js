// Divide a given array of positive integers into two parts.


function arrayPartitionSum() {

    let numbers = prompt('Enter The Array Elements which is Separated by Commas.');
    let array = numbers.split(",");
    console.log(array);

    let checkPositive = true;
    let firstArr = [];
    let secondArr = [];
    let newArray = [0, 0];
    let firstSum = 0
    let secondSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i] < 0)) {
            checkPositive = false;
        }
    }
    if (checkPositive) {
        for (let i = 0; i < array.length; i += 2) {
            firstArr.push(array[i]);
        }
        firstArr.forEach((item) => firstSum += parseInt(item))

        for (let j = 1; j < array.length; j += 2) {
            secondArr.push(array[j]);
        }
        secondArr.forEach((item) => secondSum += parseInt(item));
        console.log(firstSum);

        newArray[0] = firstSum;
        newArray[1] = secondSum;
        alert(newArray);
    } else {
        alert('Please, Enter Positive Numbers.');
    }
} arrayPartitionSum();
