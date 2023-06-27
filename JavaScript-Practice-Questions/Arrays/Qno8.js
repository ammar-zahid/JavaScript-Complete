// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

let avg;
let sum = 0;

let returnAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = (sum / arr.length);
    return avg;
}   

let arr = [2,3,4,5,6,100];
let ans = returnAverage(arr);

console.log(ans);