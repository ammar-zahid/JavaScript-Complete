// Write a JavaScript function that takes two strings as input and checks if the second string is a substring of the first string.
// Example:
// Input: isSubstring('Hello, World!', 'World')
// Output: true

function twoStrings(str, substr) {
    return str.includes(substr);
}

console.log(twoStrings("Hello, World", "World"));