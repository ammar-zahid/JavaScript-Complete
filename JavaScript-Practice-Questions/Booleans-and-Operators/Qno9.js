// Array Comparison: Write a function that takes two arrays as input and checks if they have the same elements in the same order. Return true if they are equal, false otherwise.

function same (array1, array2) {
    if (array1.length !== array2.length){
        return false;
    }

    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]){
            return false;
        }
        else {
            return true;
        }
    }

}

let arr1 = [2,3,4,5,6];
let arr2 = [2,3,4,5,6];

console.log(same(arr1, arr2));