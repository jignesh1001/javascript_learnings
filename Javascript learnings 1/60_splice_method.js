// splice method 
// start ,delete,insert 

const myArray = ['item1','item2','item3',"item4"];

// const deletedItems = myArray.splice(0,1)
// // deleting an element
// console.log(myArray)

// inserting an element
const deletedItems = myArray.splice(3,1,"Inserted element")
console.log(myArray)
console.log("deleted item", deletedItems)
console.log(myArray[3])

