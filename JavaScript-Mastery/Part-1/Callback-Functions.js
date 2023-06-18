function func1 (name) {
    console.log("Hello")
    console.log(`Your name is ${name}`);
}

// func1();

function func2 (callback) {
    console.log("Inside function 2");
    func1("ammar")
}

func2(func1);