// Write a function called getAverageAge that takes an array of objects, where each object represents a person with a name and age, and returns the average age of all the people.

function getAverageAge(people) {
    let sum = 0;

    for (let i = 0; i < people.length; i++){
        sum += people[i].age
    }
    return sum / people.length;
}

const people = [
    {name: 'ammar', age: 19},
    {name: 'bobby', age: 29},
    {name: 'talha', age: 39},
]

console.log(getAverageAge(people));