let user = prompt("Guess a Number");
function guessing() {
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    if (random == user) {
        alert("Good Work!");
    } else {
        alert("Not Matched!")
    }
} guessing()  