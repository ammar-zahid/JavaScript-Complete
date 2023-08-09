// LEXICAL SCOPE
// Lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created.

const value1 = 45;

const app = () => {
    const value1 = 23;

    const innerFunc1 = () => {
        console.log(`Value 1 is ${value1}`);
    }

    innerFunc1();
}

app();
console.log(value1);
