let array = ["item1", "item2", "item3"];
console.log(array);

let array2 = [];

let i = 0;
while (i < array.length) {
    array2.push(array[i].toUpperCase());
    i++;
}

console.log(array2);