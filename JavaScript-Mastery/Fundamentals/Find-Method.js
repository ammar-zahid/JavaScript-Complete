const users = [
    {userID: 1, userName: 'Ammar'},
    {userID: 2, userName: 'Fernandes'},
    {userID: 3, userName: 'Tokyo'},
    {userID: 4, userName: 'Rio'},
]

const findedUser = users.find((id) => {
    return id.userID === 3;
})

console.log(findedUser)