function info(){
    console.log(`${this.name} ${this.age}`)
}

const obj = {
    name: 'ammar',
    age: 19
}

info.call(obj)
// const personInfo = info.call(obj)
// console.log(personInfo)

const personInfo = info.bind(obj);
personInfo();

// --------------------------------------------------------------

// we cannot use this keyword in arrow function 

// --------------------------------------------------------------

const information = {
    phone: 'samsung',
    sim: 'zong',
    details(){
        console.log(`${this.phone} ${this.sim}`)
    }
}

information.details();