// array destructuring

const myArray = ["value1","value2","value3","value4",'value5']

// let myvar1 = myArray[0]
// let myvar2 = myArray[1]
// console.log("value of myvar1",myvar1)
// console.log("value of myvar2",myvar2)

let [myvar1,myvar2,...myArray2 ] = myArray;
// let myArray2 = myArray.slice(2)
myvar1 = "value change"
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)
// console.log("value of myvar3",myvar3)
console.log(myArray2);
