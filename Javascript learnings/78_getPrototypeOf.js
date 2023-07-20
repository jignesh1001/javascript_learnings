let numbers = [1,2,3]
// let numbers = new Array(1,2,3)
// array is actually created using array constructor
// prototype ---> functions
console.log(Array.isArray(Object.getPrototypeOf(numbers)))
console.log(numbers)

function hello() {
    console.log("hello")
}
console.log(hello.prototype)