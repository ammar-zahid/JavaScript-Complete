// Even or Odd: Write a function that takes a number as input and determines whether it is even or odd. Return true if the number is even, false if it is odd.

function evenOdd(n) {
    if (n % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(evenOdd(6))