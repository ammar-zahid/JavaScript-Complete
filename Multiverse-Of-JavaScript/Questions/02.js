// Write a js function to clone an array

function cloneArray(array) {
    const cloned = [...array];
    return cloned;
}

const answer = cloneArray([1,2,3,4]);
console.log(answer)