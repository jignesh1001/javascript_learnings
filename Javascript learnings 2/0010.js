// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }

// const cube = myFunction(3)
// const ans = cube(3)
// console.log(ans)

// const square = myFunction(2)
// const ans2 = square(3)
// console.log(ans2)

// written ions with arrow funct
const myFunction = (power)=>
     number=> number ** power

const cube = myFunction(3)
const ans = cube(3)
console.log(ans)

const square = myFunction(2)
const ans2 = square(3)
console.log(ans2)
