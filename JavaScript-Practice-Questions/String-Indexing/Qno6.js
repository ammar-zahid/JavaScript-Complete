// Write a JavaScript function that takes a string as input and returns the number of occurrences of a specified character.
// Example:
// Input: countOccurrences('Hello, World!', 'o')
// Output: 2

function string(str, occurrence) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === occurrence) {
            count = count + 1;
        }
    }
    return count;
}

console.log(string("Hello, World", 'o'));