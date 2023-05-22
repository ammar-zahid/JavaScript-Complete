// Create a variable string and try to add a number in it.
let name = "Ammar";
let number = 76;

console.log(name, number);

let add = name+number;
console.log(add);

console.log(name+number);

// Use typeof operator to find the data type of string used in last question

console.log(typeof[add]);
console.log(typeof(add));

// Create a const variable and object, can you change it to hold a number or string later

// const fixNumber = 89;
// fixNumber = 23;
// console.log(fixNumber); //it will throw error

const data = {
    name: 'Ammar',
    subject: 'JavaScript',
    age: 19,
}
// data = "harry"; no we cannot hold a string or number later in const variable
console.log(data);

// try to add a new key to const object of Question 3

data['name'] = 'PappuBhai';
data['class'] = 'JS with Web'
console.log(data);

// write a JS program to create a word meaning dictionary of 5 words

let dictionary = {
    accord: "concurrence of opinion",
    practice: "a customary way of operation or behavior",
    evident: "clearly revealed to the mind or the senses or judgment",
    concern: "something that interests you because it is important",
    commit: "perform an act, usually with a negative connotation",
}

console.log(dictionary);
console.log(dictionary.evident);
console.log(dictionary['commit']);