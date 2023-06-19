// Positive or Negative: Write a function that takes a number as input and determines whether it is positive or negative. Return true if the number is positive, false if it is negative.

function positiveNegative(num){
    if (num >= 0){
        return 'positive';
    }
    else {
        return 'negative';
    }
}

console.log(positiveNegative(-2))