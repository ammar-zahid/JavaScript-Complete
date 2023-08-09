// lets make a game . If user guess number 20 he wins, if he guess smaller number (print too low) , if he guess greater number (print too high).

let number = 20;
let userGuess = +prompt("Guess a number");

if (userGuess === 20) {
    console.log('You won');
}
else {
    if (userGuess < 20) {
        console.log('Guess a higher number');
    }
    else {
        console.log('Guess a lower number');
    }
}