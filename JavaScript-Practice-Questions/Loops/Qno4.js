// JavaScript program to print Fibonacci Series

let  n = 10;
let a = 0;
let b = 1;
let temp;

console.log(a);

while ( b <= n) {
    console.log(b);
    temp = a + b;
    a = b;
    b = temp;
}