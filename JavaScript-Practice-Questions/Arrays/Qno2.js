// Write a function that takes an array of strings as input and returns a new array with the lengths of the strings.

function lengthOfStrings(array){
    const newArray = [];

    for (let i=0; i<array.length; i++){
        const length = array[i].length;

        newArray.push(length);
    }


    return newArray;
}

const array = ["ammar", "huzaifa", "usman"];
console.log(lengthOfStrings(array));