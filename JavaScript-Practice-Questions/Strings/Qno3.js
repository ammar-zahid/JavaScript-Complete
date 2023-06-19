// Write a JavaScript function that takes a string as input and returns the string in reverse order.
// Example:
// Input: reverseString('Hello')
// Output: 'olleH'

const reverseString = (str) => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("Hello"));