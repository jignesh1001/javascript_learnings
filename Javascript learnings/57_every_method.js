const numbers = [2,4,56,78,12]

function isEven(number){
    return number % 2 == 0;
}
const result = numbers.every(isEven)
// console.log(result)

// callback function return true or false
// every method return true or false

const products = [
    {productId : 1, productName : "Product1",productPrice : 400},
    {productId : 2, productName : "Product2",productPrice : 500},
    {productId : 3, productName : "Product3",productPrice : 100},
    {productId : 4, productName : "Product4",productPrice : 800},
]


const pricechecker = products.every(product => product.productPrice <= 800)
console.log(pricechecker)