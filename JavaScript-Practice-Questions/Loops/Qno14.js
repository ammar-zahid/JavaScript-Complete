// Given an array of strings, use the for...of loop to find the longest string in the array. Return the longest string.

array = ['sting', 'dew', 'pepsi', 'cocacola'];
let longestString = '';

for (string of array) {
    if (string.length > longestString.length) {
        longestString = string;
    }
}

console.log(`${longestString} is the longest string`);