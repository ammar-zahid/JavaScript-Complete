function createUser(name, age, email, address){
    const user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = address;

    user.details = function(){
        console.log(`Name: ${user.name} Age: ${user.age} Email: ${user.email} Address: ${user.address}`)
    }
    return user;
}

const user1 = createUser('ammar', 19, 'ammar@gmail.com', 'Karachi')
console.log(user1)