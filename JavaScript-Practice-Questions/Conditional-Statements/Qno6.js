// Write a JavaScript function that takes in a string representing a month (e.g., "January", "February", etc.) and returns the number of days in that month. For example, if the input is "February", the function should return 28 or 29 (based on whether it's a leap year).

let calendar = (month, year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0){
        switch (month) {
            case "January": console.log("31 Days"); break;
            case "February": console.log("29 Days"); break;
            case "March": console.log("31 Days"); break;
            case "April": console.log("30 Days"); break;
            case "May": console.log("31 Days"); break;
            case "June": console.log("30 Days"); break;
            case "July": console.log("31 Days"); break;
            case "August": console.log("31 Days"); break;
            case "September": console.log("30 Days"); break;
            case "October": console.log("31 Days"); break;
            case "November": console.log("30 Days"); break;
            case "December": console.log("31 Days"); break;
        }
    }
    else {
        switch (month) {
            case "January": console.log("31 Days"); break;
            case "February": console.log("28 Days"); break;
            case "March": console.log("31 Days"); break;
            case "April": console.log("30 Days"); break;
            case "May": console.log("31 Days"); break;
            case "June": console.log("30 Days"); break;
            case "July": console.log("31 Days"); break;
            case "August": console.log("31 Days"); break;
            case "September": console.log("30 Days"); break;
            case "October": console.log("31 Days"); break;
            case "November": console.log("30 Days"); break;
            case "December": console.log("31 Days"); break;
        }
    }
}

console.log(calendar("February",2003));