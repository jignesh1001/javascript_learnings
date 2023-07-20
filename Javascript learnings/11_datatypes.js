// undefined
// when variable is declared as a const and not assigned any value then it is will throw an error
//  when variable is declared as let and not assigned any value then it is will show type as undefined
let firstName ;
console.log (typeof firstName)

firstName = "Harshit";
console.log (typeof firstName, firstName)


// null

let myVariable = null;
console.log(myVariable)
myVariable = "harshit"
console.log( myVariable , typeof myVariable)

console.log(typeof null);//bug

//BigInt

let myNumber =BigInt(12);
let samemyNumber = 1234n;
console.log(myNumber)
console.log(samemyNumber)
console.log(Number.MAX_SAFE_INTEGER)
console.log(myNumber + samemyNumber)

