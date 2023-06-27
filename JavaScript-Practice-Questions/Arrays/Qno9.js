// Write a function that takes an array of objects, where each object represents a person with properties like name and age. The function should return an array of names of people who are above a certain age threshold.

let newArray = [];
function returnDetails (arrObj) {

    let certainAge = 19;
    
    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i].age >= certainAge) {
            newArray.push(arrObj[i]);
        }
    }

    return newArray;
}

let arrObj = [
    {name: "Ammar", age: 19},
    {name: "Masood", age: 20},
    {name: "Husnain", age: 18}
]

console.log(returnDetails(arrObj))