function details(name, age){
    // const user = Object.create(details);
    this.name = name;
    this.age = age;

    // return user;
}

const user1 = new details('berlin', 40)
// console.log(details('ammar', 19))
console.log(user1)