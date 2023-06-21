// Write a JavaScript function that takes in a character and checks if it is a vowel or a consonant. If it is a vowel, return the string "Vowel". If it is a consonant, return the string "Consonant". If it is neither, return the string "Not a letter."

function checkLetter(letter){
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        console.log("Vowel Letter");
    }
    else if (letter !== 'a' || letter !== 'e' || letter !== 'i' || letter !== 'o' || letter !== 'u'){
        console.log("Consonant Letter")
    }
    else {
        console.log("Empty");
    }
}

console.log(checkLetter('a'))