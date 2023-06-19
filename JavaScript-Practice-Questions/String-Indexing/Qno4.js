// Write a JavaScript function that takes a string and an index as input and replaces the character at that index with a specified character.
// Example:
// Input: replaceChar('Hello', 2, 'X')
// Output: 'Hexlo'

function replaceString(str, index, ch) {
    let newString = '';

    for (let i = 0; i < str.length; i++) {
        if (i === index) {
            newString += ch;
        }
        else {
            newString += str[i];
        }
    }
    return newString;
}

console.log(replaceString("Ammar", 4, "Z"));