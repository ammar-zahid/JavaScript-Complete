let info = {
    name : "ammar",
    age : 19,
    email : "ammar@gmail.com",
    hobbies : ["singing", "reading", "programming"]
}

console.log(info);

for (let key in info) {
    console.log(`${key} : ${info[key]}`);
    // console.log(info[key]);
    // console.log(key + " : " + info[key]);
}

console.log(Object.keys(info));
for (let val of Object.keys(info)) {
    // console.log(val);
    console.log(`${val} : ${info[val]}`);
}