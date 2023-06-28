// Write a program that uses the for...of loop to iterate over a string and count the number of vowels (a, e, i, o, u) in it. Display the total count.

let string = "lazy brown fox is jumping";
let count = 0;

for (vowel of string) {
    if (/[aeiou]/.test(vowel)){
        count++;
    }
}

console.log(`There are ${count} vowels in the string`);