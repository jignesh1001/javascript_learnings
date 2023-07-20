// sort 

const numbers = [5,8,1000,122,400,233]

const userNames = ["Happy","Komal","Lavesh","Kalpesh","halaand",'ortega']
// console.log(userNames.sort())

let result = numbers.sort((a,b)=>{
    return a-b   // if a-b comes out to be positive then a is greater than b
})
// console.log(numbers)

let sortdecsending = numbers.sort((a,b)=>{
    return b-a  
})
// console.log(numbers)

const products = [
    {productId : 1, productName : "Product1",productPrice : 400},
    {productId : 2, productName : "Product2",productPrice : 500},
    {productId : 3, productName : "Product3",productPrice : 100},
    {productId : 4, productName : "Product4",productPrice : 800},
]
const lowToHigh = products.slice(0).sort((a,b)=>
{
    return a.productPrice - b.productPrice;
})
const highToLow = products.slice(0).sort((a,b)=>
{
    return  b.productPrice - a.productPrice ;
})
console.log(products)
console.log(lowToHigh)
console.log(highToLow)