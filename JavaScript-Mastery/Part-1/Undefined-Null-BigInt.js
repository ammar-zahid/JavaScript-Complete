// undefined
let name;
console.log(name);
console.log(typeof name);

// null
let age = null;
console.log(typeof age); //bug, error
console.log(age);

// BigInt

//max limit of a number to store in variable is 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);

let newNum = BigInt(900719925474099143483494);
console.log(newNum);

let newNum1 = 124n;
let newNum2 = BigInt(12);
console.log(newNum1 + newNum2);