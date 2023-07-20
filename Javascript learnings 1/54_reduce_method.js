// reduce method
const arr = [1,2,3,4,5,6]
// result is sum of all the elements
const result = arr.reduce((accumlator,currentvalue)=>{
    return accumlator + currentvalue;
})
// console.log(result)

const shoppigcart = [
 {itemname : "Shirt",itemid : 1, price : 1200},   
 {itemname : "Pant",itemid : 2, price : 1300},   
 {itemname : "Hoodie",itemid : 3, price : 13200},   
 {itemname : "Shoes",itemid : 4, price : 1299},   
]
const shoppingbillamount = shoppigcart.reduce((totalcartvalue,item)=>{
    // shoppigcart.forEach((item)=>{
    //     console.log(`${item.itemname} with id ${item.itemid} costs ${item.price}`)
    // }
    // )
    return totalcartvalue + item.price;
},0)

  shoppigcart.forEach((item)=>
    console.log(`${item.itemname} with  item id ${item.itemid} costs ${item.price}`)

)
console.log("total amount to be paid is" ,shoppingbillamount)
