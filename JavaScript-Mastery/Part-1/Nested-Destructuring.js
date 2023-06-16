let usersInformation = [
    {userId: 342, userName: "ammar", userGender: "male"},
    {userId: 457, userName: "zahid", userGender: "male"},
    {userId: 378, userName: "aslam", userGender: "male"},
]

// destructuring from array

let [user1, ,user3] = usersInformation;
console.log(user1, user3);

// destructuring from object

let [{userName}, {userId}] = usersInformation;

console.log(userName);
console.log(userId);

let myUser;

for (let i = 0; i < usersInformation.length; i++) {
    if (usersInformation[i].userName === "zahid") {
        myUser = usersInformation[i].userName;
        break;
    }
}

console.log(myUser);