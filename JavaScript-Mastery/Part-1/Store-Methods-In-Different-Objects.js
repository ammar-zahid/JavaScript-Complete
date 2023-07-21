const userDetails = {
    about: function(){
        console.log(`Name: ${user.name} Age: ${user.age} Email: ${user.email} Address: ${user.address}`)
    }
}

function createUser(name, age, email, address){
    const user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = address;

    user.about = userDetails.about;
    return user;
}

const user1 = createUser('ammar', 19, 'ammar@gmail.com', 'Karachi')
console.log(user1)