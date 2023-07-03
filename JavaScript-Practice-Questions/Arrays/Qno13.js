// Extract Even and Odd: Write a function that takes an array of numbers as input and returns an object with two properties: 'even' and 'odd'. The 'even' property should contain an array of all even numbers from the input array, and the 'odd' property should contain an array of all odd numbers. Use array destructuring to achieve this.

function evenOdd (array) {
    let obj = {
        even: [],
        odd: [],
    };

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            obj.even.push(array[i]);
        }
        else {
            obj.odd.push(array[i]);
        }
    }

    return obj;
}

let array = [1,2,3,4,5,6,7,8,9];
console.log(evenOdd(array))