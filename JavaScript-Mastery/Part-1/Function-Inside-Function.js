const app = () => {
    console.log("This app is performing tasks");

    const add = (x , y) => x + y;

    const statement = () => {
        console.log("This is simple calculation");
    }
    console.log(`Answer is ${add(5, 8)}`);
    statement();
}

app ();