let array = [2,8,5,9];

// function mulByTwo() {
//     for (let i = 0; i < array.length; i++)  {
//         console.log(`Index is ${i} and number is ${array[i]}`);
//     }
// }

// mulByTwo();

array.forEach(function(number, i){
    console.log(`Index is ${i} and number is ${number}`);
})

const objects = [
    {firstName: "Captain", age: 19, gender: "male"},
    {firstName: "America", age: 23, gender: "male"}
]

objects.forEach(function(name,i){
    console.log(objects[i].firstName)
})