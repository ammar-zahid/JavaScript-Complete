// Write a function that takes an array of numbers as input and returns the largest number in the array.

function largestNumber(array) {
    let num = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i];
        }
    }
    return num;
}

let array = [4, 7, 3, 66, 34, 2];

console.log(largestNumber(array));