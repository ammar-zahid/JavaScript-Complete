// Write a JavaScript function that takes in a string and checks if it contains only lowercase letters, only uppercase letters, or a mix of both. If it contains only lowercase letters, return the string "Lowercase letters only." If it contains only uppercase letters, return the string "Uppercase letters only." Otherwise, return the string "Mix of lowercase and uppercase letters." 

function caseCheker (str) {
    let hasLowerCase = false;
    let hasUpperCase = false;

    for (let i = 0; i < str.length; i++){
        if (str[i] >= 'a' && str[i] <= 'z'){
            hasLowerCase = true;
        }
        else if (str[i] >= 'A' && str[i] <= 'Z'){
            hasUpperCase = true;
        }

        if (hasLowerCase && hasUpperCase){
            return "Mix of lower case and upper case letters";
        }
    }

    if (hasLowerCase){
        return "Has Lower Case Letters"; 
    }
    else if (hasUpperCase){
        return "Has Upper Case Letters";
    }
    else {
        return "Both Upper and Lower Case Letters";
    }

}

console.log(caseCheker("captain"));
console.log(caseCheker("CAPTAIN"));
console.log(caseCheker("CAPtain"));