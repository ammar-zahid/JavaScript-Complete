// Write a function that takes an array of numbers as input and returns a new array with the squared values of the original array.

let newArray = [];

function squaredValues(arr) {

    for (let i = 0; i < arr.length; i++){
        newArray[i] = ( arr[i] * arr[i] );
    }

    return newArray;
}

let arr = [2,3,4,5,6];
let ans = squaredValues(arr);
console.log(ans);