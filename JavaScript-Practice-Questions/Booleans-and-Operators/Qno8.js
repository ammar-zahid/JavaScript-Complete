// String Length Check: Write a function that takes a string as input and checks if its length is between a minimum and maximum limit (inclusive). Return true if the length is within the specified limits, false otherwise.

function lengthCheck(str){

    const minLength = 5;
    const maxLength = 10;

    if (str.length >= minLength && str.length < maxLength) {
        return true;
    }
    else {
        return false;
    }
}

console.log(lengthCheck('Ammar'))