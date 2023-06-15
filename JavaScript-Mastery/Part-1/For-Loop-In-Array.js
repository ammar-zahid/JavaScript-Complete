let fruits = ["banana", "mango", "orange", "apple"];
console.log(fruits);

console.log(fruits.length-1);
console.log(fruits.length);
// console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits2[i]);
}

console.log(fruits2);