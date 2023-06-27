// Write a function that takes an array of numbers as input and returns a new array with only the even numbers from the input array.

let newArray = [];

function returnEvenNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);        
        }
    }
    
    return newArray;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = returnEvenNumbers(arr);

console.log(ans);