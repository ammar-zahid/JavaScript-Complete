function values(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);

    console.log(typeof c);
    console.log(Array.isArray(c));
    console.log(c);
}

values(3,5,3,6,7,5,4,6,7);

function sum(...numbers) {
    let sumAnswer = 0;
    for (let number of numbers) {
        sumAnswer = sumAnswer + number;
    }
    return sumAnswer;
}

let ans = sum(1,2,3,4,5,6,7,8,9,10);
console.log(ans);