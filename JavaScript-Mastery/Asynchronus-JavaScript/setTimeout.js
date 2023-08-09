let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} is selected`);
        call_production();
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log('Production has started')
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
                setTimeout(() => {
                    console.log("Added Toppings");
                    setTimeout(() => {
                        console.log("Ready to serve")
                        setTimeout(() => {
                            console.log("Serving")
                        }, 2000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 4000)
    }, 0o0);
}
order(0, production);