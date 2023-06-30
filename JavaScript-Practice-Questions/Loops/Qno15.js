// Write a function that takes an array of strings and uses the forEach loop to convert each string to uppercase. Return the modified array.

let upperCaseText = [];

let upperCase = (array) => {
    array.forEach(element => {
        upperCaseText.push(element.toUpperCase());
    });
    return upperCaseText;
}

let array = ['pakistan', 'india', 'china'];
console.log(upperCase(array));