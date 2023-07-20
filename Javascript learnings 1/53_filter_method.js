// filter method
// return value of callback in filter method should always return boolean value

const arr = [1,2,34,4,5,52,33]

const odd = arr.filter(number => number % 2 !== 0)

console.log(odd)