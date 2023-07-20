// trim()
// toUpperCase()
// toLowerCase()
// slice 

let firstName = "Jagjeet   ";

console.log(firstName.length)
let newVariable = firstName.trim(); // this will give new string
console.log(newVariable)
console.log(newVariable.length)
// 1:02:59 First Pause in tutorial

firstName = "JAGJEET"
 console.log(firstName.toLowerCase())
// this will give a new string  and does not change the original string . As strings are immutable

// start index
// end index

let newString = firstName.slice(0,5); //Jagje
console.log(newString)
//it does not include the end index 5
// end index is not included in slice
         