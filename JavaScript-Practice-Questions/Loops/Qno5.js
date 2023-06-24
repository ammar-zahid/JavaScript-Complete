// Write a JavaScript program to find the largest element in an array using a for loop.

let array = [1,2,3,4,8,9,6,7,5,8,11];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
} 

console.log(largest);