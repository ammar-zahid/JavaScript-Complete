// Age Verification: Write a function that takes an age as input and checks if the person is eligible to vote (age 18 or older). Return true if eligible, false otherwise.

function eligible(age){
    if(age >= 18){
        return true;
    }
    else {
        return false;
    }
}

console.log(eligible(12));