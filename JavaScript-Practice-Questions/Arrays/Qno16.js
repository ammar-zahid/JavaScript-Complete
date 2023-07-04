// Nested Array Destructuring: Given the following nested array: const numbers = [1, [2, 3], 4, [5, 6, [7, 8, 9]]]; Write code to extract the values 2, 5, and 9 using array destructuring.

const numbers = [1, [2, 3], 4, [5, 6, [7, 8, 9]]];

let [, [value2, value3], , [value5, , [ , ,value9]]] = numbers;

console.log(value2, value3, value5, value9)