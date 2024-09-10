// Rotate The String "Bititude"!

let string = "bititude";
let array = string.split('')

for (let i = 0; i < string.length; i++) {
    let remove = array.pop();
    let add = array.unshift(remove)
    console.log(array.join(''));
}


