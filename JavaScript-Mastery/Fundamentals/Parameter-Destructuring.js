const personInfo = {
    name: "Ammar",
    gender: "male",
    age: 19
}

function personDetails ({name,gender,age}) {
    // console.log(obj.name);
    // console.log(obj.gender);
    // console.log(obj.age);
    console.log(name);
    console.log(gender);
    console.log(age);
}

personDetails(personInfo);