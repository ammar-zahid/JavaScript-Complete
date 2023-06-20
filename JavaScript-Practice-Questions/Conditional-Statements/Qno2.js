// Write a JavaScript program that takes three numbers as input and prints the largest number among them.

let num1 = 5;
let num2 = 8;
let num3 = 12;

if (num1 > num2 && num1 > num3){
    console.log(`${num1} is greater among all`);
}
else if (num2 > num1 && num2 > num3){
    console.log(`${num2} is greater among all`);
}
else {
    console.log(`${num3} is greater among all`);
}