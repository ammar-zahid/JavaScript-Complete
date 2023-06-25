// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

let sum=0;
function sumOfArray (array) {
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

array = [4,6,7,3,5];
console.log(sumOfArray(array));