// primitive type example
// numbers
// booleans
// null
// undefined

// value stores in separate variable

let num1 = 5;
let num2 = num1;

console.log(`Value of num1 is ${num1}`);
console.log(`Value of num2 is ${num2}`);

num1++;

console.log(`Value of num1 is ${num1}`);
console.log(`Value of num2 is ${num2}`);

// reference type example
// array
// object
// functions

//value stores in reference variable with same memory address

let array1 = ["item1", "item2"];
let array2 = array1;

console.log(array1);
console.log(array2);

array1.push("item3");

console.log(array1);
console.log(array2);