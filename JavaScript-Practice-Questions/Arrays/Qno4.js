// Write a function that takes two arrays as input and returns a new array containing elements that are present in both arrays.

let newArray = [];
const returnTwoArray = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++){
        newArray[i] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        newArray.push(arr2[i]);
    }
    
    return returnTwoArray;
}

arr1 = [3,5,6,3,5];
arr2 = [8,6,7,8,6];
let ans = returnTwoArray(arr1, arr2);

console.log(newArray);