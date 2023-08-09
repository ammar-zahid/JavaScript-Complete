for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// console.log(i); error because let can only work inside function

// another method
let i = 1;
for (; i < 5; i++) {
    console.log(i);
}

// var variable
for (var j = 1; j < 5; j++) {
    console.log(j);
}
console.log(`Value of j is ${j}`); // no error because var works globally