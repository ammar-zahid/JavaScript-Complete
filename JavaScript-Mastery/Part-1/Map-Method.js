const array = [4,6,9,5];

let myFunc = function(number) {
    return number * number;
}

console.log(array.map(myFunc));

const users = [
    {firstName: "Ammar", age: 19},
    {firstName: "Zahid", age: 48},
    {firstName: "Aslam", age: 72},
    {firstName: "Mujahid", age: 38}
]

let nameOfUsers = users.map((user,i) => {
    return (`${user.firstName}`)
})

console.log(nameOfUsers)