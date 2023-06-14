// Array is an object
// non primitive data type 
// reference type
// ordered collection of data

let fruits = ["mango", "apple", "banana", "Cherry"];
let mixed = ["mango", "apple", "banana", "Cherry", null, undefined];
console.log(fruits);
console.log(mixed);


console.log(`Length of fruits array is ${fruits.length}`);

fruits[1] = "Chiku";
console.log(fruits);

console.log(fruits[3]);

console.log(typeof fruits);
console.log(Array.isArray(fruits));
