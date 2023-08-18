var number = Math.floor(Math.random() * 10);
let promise1 = new Promise((resolve, reject)=>{

    if (number < 5){
        return resolve();
    }
    else {
        return reject();
    }
})

promise1
.then(() => {
    console.log(`${number} is lesser than 5`)
})
.catch(() => {
    console.log(`${number} is greater than 5`)
})