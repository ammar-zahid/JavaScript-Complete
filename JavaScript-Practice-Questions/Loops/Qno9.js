// Write a function that takes an array of strings as an argument and uses the forEach loop to concatenate all the strings together. Return the concatenated string.

function concatStrings(arr) {

    let concat = '';
    arr.forEach(string => {
        concat += string;
    })

    return concat;
}

let arr = ['ammar', 'zahid', 'aslam'];

console.log(concatStrings(arr));