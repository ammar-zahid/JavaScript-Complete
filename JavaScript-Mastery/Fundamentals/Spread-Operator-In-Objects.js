let obj = {
    name : "Captain",
    age : 19,
    subject : "JavaScript"
}

console.log(obj);

let obj1 = {
    school : "google",
    teacher : "online"
}

console.log(obj1);

let obj2 = {...obj, ...obj1};

console.log(obj2);

// console.log(obj === obj1);

// let newObj = {..."abcdefghijklmnopqrstuvwxyz"};
let newObj = {...["item1", "item2", "item3"]};
console.log(newObj);