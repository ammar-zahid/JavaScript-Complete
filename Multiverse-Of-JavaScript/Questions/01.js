// Write a js function to check whether an input is array or not.

function checkArray (input){
    if (Array.isArray(input)) {
        return true
    }
    else {
        return false
    }
}

const answer = checkArray([1,2,3,4,3]);
console.log(answer)