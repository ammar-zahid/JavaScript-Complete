// Write a function called mergeObjects that takes two objects as parameters and merges them into a single object. If there are any properties with the same name, the value from the second object should overwrite the value from the first object.

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

let obj1 = {
    name: 'ammar',
    age: 19
}
let obj2 = {
    name: 'captain',
    age: 19
}

console.log(mergeObjects(obj1, obj2))