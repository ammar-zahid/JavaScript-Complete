const info = {
    name: "Ammar",
    age: 19,
    gender: "male",
    phone: 485749,
    "person hobbies" : ["singing", "programming", "eating"]
}
console.log(info["person hobbies"]);
info["person hobbies"].push("sleeping");

let [...array] = info["person hobbies"];
console.log(array);

console.log(info);

console.log(info.name);
console.log(info.phone);
console.log(info["name"]);
console.log(info["phone"]);

const key = "email";
// info.email = "ammar@gmail.com";
// info["email"] = "ammar@gmail.com";

// info.key = "ammar@gmail.com";
info[key] = "ammar@gmail.com";
console.log(info);