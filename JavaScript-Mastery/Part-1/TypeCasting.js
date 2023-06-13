// Primitive Datatypes
// Strings
// Numbers
// Booleans
// Undefined
// Null
// BigInt
// Symbol


//type of operator
let name = "Ammar";
let age = 19;
let per = 64.5;

console.log(typeof name);
console.log(typeof age);
console.log(typeof per);

// numbers to strings
age = age + ""; //19 --> "19"
console.log(typeof age);
String(age); // another method
console.log(typeof age); 
console.log(age);

// strings to numbers
let newStr = +"19"; // "19" --> 19
console.log(typeof newStr);
Number(newStr); // another method
console.log(typeof newStr);
console.log(newStr);