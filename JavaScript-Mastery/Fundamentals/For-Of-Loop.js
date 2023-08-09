const fruits = ["apple", "mango", "orange", "grapes", "cherry"];
console.log(fruits);

const fruit2 = [];

for (fruit of fruits) {
    fruit2.push(fruit.toUpperCase());
}

console.log(fruit2);

const items = ["item1", "item2", "item3", "item4"];

for (const item of items) {
    console.log(item);
}