// array push pop
let fruits =['apple', 'mango','grapes'];
console.log(fruits)

//push

// fruits.push("Banana")
// console.log(fruits)

//pop

// let poppedFruit = fruits.pop()
// console.log(fruits)
// console.log('ppoped fruit is',poppedFruit)

//unshift

// fruits.unshift('Banana')
// fruits.unshift('Myfruits')
// console.log(fruits)

//shift
let removedFruits = fruits.shift()
console.log(fruits)
console.log("removed fruits is ",removedFruits)


//push and pop are faster than shift and unshift 
// as push and pop deal with last index 
// shift and unshift has to shift memory location of all 
// items to insert first element
