const user1 = {
    name: 'Ammar',
    age: 19,
    // hobby: 'singing',
    about: function(){
        console.log(`${this.name} ${this.age}${this.hobby}`);
    }
}

const user2 = {
    name: 'Murillo',
    age: 43
}

function personInfo(country, city){
    console.log(`${this.name} ${this.age} ${country} ${city}`)
}

const person1 = {
    name: 'sergio',
    age: 38,
}
const person2 = {
    name: 'anibel',
    age: 22,
}

personInfo.apply(person1, ["Spain", "Paris"]);
const bindFunc = personInfo.bind(person1, ["Spain", "Paris"]);
// console.log(bindFunc)
bindFunc();