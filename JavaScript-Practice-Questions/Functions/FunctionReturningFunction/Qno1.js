// Create a function called multiplyBy that takes a number as an argument and returns a function. The returned function should take another number as an argument and return the product of the two numbers.

function returned (num) {
    return num*num;
}

function multiplyBy (x) {
    return returned(x);
}

let x = 5;
console.log(multiplyBy(x));