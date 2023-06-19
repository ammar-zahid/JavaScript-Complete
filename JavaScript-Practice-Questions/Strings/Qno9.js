// Reverse Words: Write a function that takes a sentence as input and reverses the order of words in the sentence. For example, "Hello World" should become "World Hello".

function reverseOrder(str) {
    let words = str.split(' ');

    let reverseWords = words.reverse();

    let reversedSentence = reverseWords.join(' ');

    return reversedSentence;
}

console.log(reverseOrder("Hello World"));