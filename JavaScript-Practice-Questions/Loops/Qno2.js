// Write a JavaScript program to find the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1.

let num = prompt("Enter a number");
let fact = 1;

for (let i=1; i<=num; i++){
    fact = fact*i;
}

console.log(fact);