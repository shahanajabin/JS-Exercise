// Check the Total Marks of a Student in Various Examinations.

let exam = prompt(" Enter The Name of The Examination ?");
let totalMark = parseInt(prompt("Enter The Total Mark of Your Examination."));

function gradeCheck() {

    switch (exam) {
        case "final examination":
        case "annual examination":
        case "board examination":
            if (totalMark >= 89 && totalMark <= 100) {
                alert(true)
            } else {
                alert(false)
            }
            break;
        case "unit test":
        case "midterm examination":
        case "mock examination":
        case "pre-board examination":
            if (totalMark >= 90) {
                alert(true)
            } else {
                alert(false)
            }
    }

} gradeCheck()