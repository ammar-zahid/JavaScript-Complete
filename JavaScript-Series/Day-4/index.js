console.log('Primitive Datatypes');
let s = 'string';
let s1 = Symbol('Its a Symbol');
let n = null;
let n1 = 123;
let b = Boolean;
let b1 = BigInt("546") + BigInt("4");

console.log(s,s1,n,n1,b,b1);

console.log("Non Primitive Datatypes / Objects");

let data = {
    name: 'Jaadu',
    age: 23,
    year: 2023,
    topic: 'JavaScript',
}

console.log(data);
console.log(data['age']);
// console.log(typeof['age']);
console.log(typeof 'topic');