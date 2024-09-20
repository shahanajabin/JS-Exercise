// Area Of Triangle!

// Variables

let side1 = 5;
let side2 = 6;
let side3 = 7;

// Area 

let sum = (side1 + side2 + side3) / 2;
let area = Math.sqrt(sum * (sum - side1) * (sum - side2) * (sum - side3));

console.log(sum);
console.log(area.toFixed(2));
