// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

hello();
function hello(){
    console.log("HEllO PEOPlE");
}
hello();

// helloPeople();
let helloPeople = function() {
    console.log("HEllO PEOPlE");
}

helloPeople();

// helloWorld();
let helloWorld = () => {
    console.log("HEllO WORlD");
}

helloWorld();