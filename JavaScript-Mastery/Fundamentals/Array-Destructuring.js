let array = ["item1", "item2", "item3", "item4", "item5"];
console.log(array);

let index0 = array[0];
let index1 = array[1];

console.log(index0, index1);

let [val1, ,val2] = array;
console.log(val1, val2);

let [num1, num2, ...newArray] = array;
console.log(newArray);

let newArray1 = array.slice(1);
console.log(newArray1);