// using .then .catch

// function fnc (){
//     fetch('https://randomuser.me/api')
//     .then((raw)=>{
//         return raw.json();
//     })
//     .then((data)=>{
//         console.log(data)
//     })
// }
// fnc()

async function fnc (){
    let raw = await fetch('https://randomuser.me/api');
    let data = await raw.json();
    console.log(data)
}

fnc()