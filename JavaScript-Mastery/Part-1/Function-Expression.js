const sumFunction = function(x , y) {
    return x + y;
}

console.log(sumFunction(5,2));

const evenOdd = function (num) {
    if (num % 2 === 0) {
        console.log(`${num} is even number`);
    }
    else {
        console.log(`${num} is odd number`);
    }
}

evenOdd(3);