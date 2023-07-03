// Split First and Remaining: Write a function that takes an array as input and returns an object with two properties: 'first' and 'remaining'. The 'first' property should contain the first element of the input array, and the 'remaining' property should contain an array of the remaining elements. Use array destructuring to achieve this.

function firstLast (array) {
    
    let obj = {
        first: undefined,
        remaining: [],
    }

    obj.first = array[0];

    [obj.first, ...obj.remaining] = array;

    return obj;
}

let array = [4,7,8,5,8,1];
console.log(firstLast(array));