// Extract First and Last: Write a function that takes an array of numbers as input and returns an array containing the first and last elements of the input array using array destructuring.

function indexes (array){
    let slicedArray = [];

    slicedArray.push(array[0]);
    slicedArray.push(array[array.length-1]);
    
    return slicedArray;
}

let array = [1,2,3,4,5,6];
console.log(indexes(array))