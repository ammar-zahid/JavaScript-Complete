// Leap Year Check: Write a function that takes a year as input and checks if it is a leap year. Return true if it is a leap year, false otherwise. (A leap year is divisible by 4, but not divisible by 100 unless it is also divisible by 400.)

function checkLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return 'Leap Year';
    }
    else {
        return 'Normal Year';
    }
}

console.log(checkLeapYear(2020));