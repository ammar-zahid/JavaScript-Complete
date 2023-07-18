const products = [
    {productId: 1 , productName: 'Mobile' , productPrice: 12000},
    {productId: 2 , productName: 'Tv' , productPrice: 16000},
    {productId: 3 , productName: 'Laptop' , productPrice: 18000},
    {productId: 4 , productName: 'Table' , productPrice: 25000},
    {productId: 3 , productName: 'Charger' , productPrice: 1000},
]

const lowToHigh = products.sort((low, high) => {
    return low.productPrice - high.productPrice;
})

console.log(lowToHigh)