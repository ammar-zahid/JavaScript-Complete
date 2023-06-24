// Write a JavaScript program to find the sum of all even numbers between 1 and a given positive integer using a do-while loop.

let num = 20;
let i = 1;
let sum = 0;

do {
    if (i % 2 === 0){
        sum = sum + i;
    }
    i++;
} while (i <= num);

console.log(sum);