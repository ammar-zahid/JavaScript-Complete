// Write a JavaScript program that determines whether a given string is a palindrome or not. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward. Print "Palindrome" if it is a palindrome; otherwise, print "Not a palindrome".

let str = "nun";
let palindromeCheck = '';

for (let i = str.length - 1; i >= 0; i--){
    palindromeCheck += str[i];
}

console.log(str);
console.log(palindromeCheck);

if (str === palindromeCheck){
    console.log("This is palindrome string");
}
else {
    console.log("This is not palindrome string");
}