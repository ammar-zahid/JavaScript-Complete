function details(name, age, rollNo){

    const user = Object.create(details.prototype);
        user.name = name;
        user.age = age;
        user.rollNo = rollNo;
        return user;
    }

details.prototype.about = function(){
    return (`${this.name} ${this.age} ${this.rollNo}`)
}

console.log(details('ammar', 19, 2323))