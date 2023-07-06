// Write a function called countProperties that takes an object as a parameter and returns the number of properties present in the object.

function countProperties (obj) {
    return Object.keys(obj).length;
}

let obj = {a:1, b:23, c:54};

console.log(countProperties(obj));