let age = 10;
let drink;

if (age >= 5) {
    drink = 'Tea';
}
else {
    drink = 'Milk';
}

console.log(drink);

// lets do this with ternary operator

let drinking = age >= 5 ? 'Tea' : 'Milk';
console.log(drinking);

// more examples

let num = 11;
num = (num % 2 === 0) ? 'Even' : 'Odd';
console.log(num);