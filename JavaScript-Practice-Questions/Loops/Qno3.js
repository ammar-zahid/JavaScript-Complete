// Write a JavaScript program to check whether a given number is prime or not. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

function primeNumberChecker(num){
    let count = 0;
    for (let i=1; i<=num; i++){
        if (num % i === 0){
            count = count + 1;
        }
    }
    if (count === 2){
        console.log("Prime Number");
    }
    else {
        console.log("Not a Prime Number");
    }
}
console.log(primeNumberChecker(10));