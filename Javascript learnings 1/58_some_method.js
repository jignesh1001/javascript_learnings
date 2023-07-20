// some method

const numbers = [1,3,4,5]

const result = numbers.some(number => number % 2 ===0)
// console.log(result)

const shoppigcart = [
    {itemname : "Shirt",itemid : 1, price : 1200},   
    {itemname : "Pant",itemid : 2, price : 1300},   
    {itemname : "Hoodie",itemid : 3, price : 13200},   
    {itemname : "Shoes",itemid : 4, price : 1299},   
   ]

const product = shoppigcart.some(element => element.price > 10000)
console.log(product)