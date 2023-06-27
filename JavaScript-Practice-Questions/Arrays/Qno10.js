// Write a function that takes an array of strings as input and returns the first element that starts with a specific character.

function returnFirstElement(arr) {
    let specificCharacter = 'H';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === specificCharacter) {
            return arr[i];
        }
    }

}

let arr = ["Ammar", "Masood", "Huzaifa", "Mansoor", "Husnain"];

console.log(returnFirstElement(arr));