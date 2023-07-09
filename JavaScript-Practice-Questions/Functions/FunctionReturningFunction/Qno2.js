// Create a function called counter that returns a function. The returned function should initialize a count to 0 and increment it by 1 each time it is called. The count should be accessible even after the returned function is called.

function returned (){
    let count = 0;

    if (returned) {
        count++;
    }
}

function counter () {
    return returned();
}

console.log(counter())