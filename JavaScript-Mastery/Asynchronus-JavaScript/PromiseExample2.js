let p1 = new Promise ((res, rej)=>{
    return res("Take a bowl");
})

let p2 = p1
.then((data)=>{
    console.log(data);
    return new Promise((res, rej) => {
        return res("Add water")
    })
})

let p3 = p2
.then((data)=>{
    console.log(data)
    return new Promise((res, rej)=>{
        return res("Add tea and sugar")
    })
})

let p4 = p3 
.then((data)=>{
    console.log(data)
    return new Promise((res, rej)=>{
        return res("Boil it")
    })
})

let p5 = p4
.then((data)=>{
    console.log(data)
    return new Promise((res, rej)=>{
        return res("Tea is ready")
    })
})

p5
.then((data)=>{
    console.log(data)
})