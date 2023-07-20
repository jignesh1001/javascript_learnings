// how to clone array

// how to concatenate two arrays

let array1 = ["item1", 'item2'];
// let array2 = ["item1", 'item2']; //way1
// let array2 = array1.slice(0,2)
// let array2 = [].concat(array1)    
 

// new way
// spread operator
 let oneMoreArray =["item3","item4"]
 let array2 = [...array1]//way4
//  array1.push("item3")
console.log(array1 === array2);
console.log(array1)
console.log(array2)

// cloning array will create new array in heap memory