// Write a JavaScript program that determines whether a given year is a leap year or not. A leap year is divisible by 4 but not divisible by 100, unless it is also divisible by 400. Print "Leap year" if it is a leap year; otherwise, print "Not a leap year".


let year = 2004;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log("Leap Year");
}
else {
    console.log("Not a leap year");
}