// Write a JavaScript program that determines whether a given year is a leap year or not. However, this time, use a ternary operator to perform the check. Print "Leap year" if it is a leap year; otherwise, print "Not a leap year".

let year = 2003;

(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? console.log(`${year} is leap year`) : console.log(`${year} is not leap year`);