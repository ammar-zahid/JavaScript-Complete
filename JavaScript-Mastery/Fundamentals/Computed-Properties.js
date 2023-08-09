const key1 = "keyValueOne";
const key2 = "keyValueTwo";

const key3 = "keyValueThree";
const key4 = "keyValueFour";

let obj = {
    [key1] : key3,
    [key2] : key4
}

console.log(obj);

let obj1 = {
    key1 : key3,
    key2 : key4
}

console.log(obj1);

let obj2 = {}

obj2[key1] = key3
obj2[key2] = key4

console.log(obj2);