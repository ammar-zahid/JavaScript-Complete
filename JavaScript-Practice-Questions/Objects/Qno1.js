// Write a function called getKeys that takes an object as a parameter and returns an array of all the keys present in the object.

function getKeys(obj){
    let array = [];
    
    for (key in obj) {
        array.push(key);
    }
    return array;
}

let obj = {
    name: 'captain',
    age: 19
}

console.log(getKeys(obj));