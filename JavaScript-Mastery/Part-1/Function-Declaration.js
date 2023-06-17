function hello() {
    console.log("Hello, i am function");
}

hello();
hello();

function sumFunction(x , y) {
    return x + y;
}

let answer = sumFunction(5, 3);
console.log(`answer is ${answer}`);


// find index of array element in function

function arrayIndex (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const array = [3, 5, 1, 5, 9, 7];
console.log(arrayIndex(array, 9));