// write a js function to get first element of an array. Passing the parameter 'n' will return the first 'n' elements of an array.

function getElement (array, n=1){
    const cloned = [];

    for(let i=0; i<n; i++){
        cloned.push(array[i]);
    }
    return cloned;
}

const elements = getElement([1,4,5,6,3], 4);
console.log(elements);