const person = {
    name: 'Ammar',
    age: 19,
    about: function(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}

person.about();

function personInfo(){
    console.log(`Name is ${this.name} and age is ${this.age}`);
}

const person1 = {
    name: 'Zahid',
    age: 52,
    about: personInfo
}
const person2 = {
    name: 'Siraaj',
    age: 27,
    about: personInfo
}
const person3 = {
    name: 'Ali',
    age: 21,
    about: personInfo
}

person2.about();