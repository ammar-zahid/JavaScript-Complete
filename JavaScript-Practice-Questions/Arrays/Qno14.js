// Skip First Element: Write a function that takes an array as input and returns a new array without the first element, using array destructuring.

function skipFirstElement (array) {
    let [ , ...newArray] = array;

    return newArray;
}

let array = [6,4,7,5,7];
console.log(skipFirstElement(array));