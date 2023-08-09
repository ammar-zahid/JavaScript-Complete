const users = [
    {userID: 1, userName: 'Ammar', userAge: 12},
    {userID: 2, userName: 'Fernandes', userAge: 20},
    {userID: 3, userName: 'Tokyo', userAge: 49},
    {userID: 4, userName: 'Rio', userAge: 34},
]

console.log(users.some((check) => {
    return check.userAge < 18;
}))