//set (it is an iterable )
// store data
// sets also have its own method
// no index based access
// order is not guaranteed
// unique values only (no duplicates allowed)

const numbers = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(5)
const items = [1,22,32,34]
numbers.add(items)
// console.log(numbers)
// if(numbers.has(1) ){
//     console.log("1 is present")
// }else{
// console.log("1 is not present")
// } 
// console.log(numbers)
for(let number of numbers){
    console.log(number)
}
const myArray = [1,2,3,4,2,3,2,1];
const uniqueElements = new Set(myArray)
console.log(uniqueElements)
console.log(myArray)
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length)