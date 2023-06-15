// cloning array as separate array

let array1 = ["item1", "item2"];
// let array2 = array1; same as array 1
// let array2 = ["item1", "item2"]; // different

// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [...array1];

// let array2 = array1.slice(0).concat(["item4", "item5"]);
// let array2 = [].concat(array1, ["item4", "item5", "item6"]);
// let array2 = [...array1, "item6", "item7"];

let anotherArray = ["box1", "box2"];

// let array2 = array1.slice(0).concat(anotherArray);
// let array2 = array1.concat(anotherArray);
let array2 = [...array1, ...anotherArray];

array1.push("item3");

console.log(array1);
console.log(array2);

console.log(array1 === array2);