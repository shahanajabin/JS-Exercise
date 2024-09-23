// Count the number of vowels in a given string. 

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function vowelCount(string) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result++;
        }
    }
    console.log(result);
} vowelCount('hello world')
vowelCount('Antidisestablishmentarianism')