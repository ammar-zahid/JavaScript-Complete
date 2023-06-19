// Write a JavaScript function that takes a string as input and returns the first and last characters concatenated together.
// Example:
// Input: firstLastChar('JavaScript')
// Output: 'Jt'

const inputString = (str, index=0) => {
    return str[index] + str[str.length-1];
}

console.log(inputString("Captain"))