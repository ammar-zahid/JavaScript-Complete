// old method

// const addTwoNumbers = (x,y) => {
//     if (y === undefined) {
//         y = 0;
//     }
//     return x + y;
// }

// modern method
const addTwoNumbers = (x , y=1) => x + y;

let sum = addTwoNumbers(4);
console.log(sum);