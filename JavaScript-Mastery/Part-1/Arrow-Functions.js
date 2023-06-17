const sumFunction = (x,y) => x + y;

console.log(sumFunction(4,5))

let fact = 1;
const factorialFunction = (num) => {
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(`Factorial of ${num} is ${fact}`);
}

factorialFunction(4);