// Write a JavaScript function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Example:
// Input: countVowels('JavaScript')
// Output: 3

function string(str) {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowels = vowels + 1;
        }
    }
    return vowels;
}

console.log(string("JavaScript"));