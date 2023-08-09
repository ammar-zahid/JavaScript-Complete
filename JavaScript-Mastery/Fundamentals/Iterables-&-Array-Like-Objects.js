// iterables

// if a for of loop is applicable than its a iterable

const name = 'Captain';
for (char of name){
    console.log(char)
}


// array like objects

// if a for of loop is not applicable than its not an iterable, its an array like object

const user = {
    name: 'ammar', age: 19
}

// for (detail of user){
//     console.log(detail)
// }

console.log(user.name)