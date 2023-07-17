const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const odd = function (number) {
    return (number % 2 === 0);
}

const oddFilter = numbers.filter(odd);

console.log(oddFilter);
