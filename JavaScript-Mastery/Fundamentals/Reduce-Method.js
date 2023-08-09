const userCart = [
    {productId: 1 , productName: 'Mobile' , productPrice: 12000},
    {productId: 2 , productName: 'Tv' , productPrice: 16000},
    {productId: 3 , productName: 'Laptop' , productPrice: 18000},
]

const totalAmount = userCart.reduce((initialPrice, totalPrice) => {
    return initialPrice + totalPrice.productPrice;
}, 0)

console.log(totalAmount)