// Write a function that takes an array of strings as input and returns a new array with the strings in reversed order.

let newArray = [];
function reverseStrings(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    console.log(newArray)
}

let arr = ["ammar", "captain", "artistic"];
reverseStrings(arr);