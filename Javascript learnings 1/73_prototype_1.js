function hello(){
    console.log("Hello world")
}
console.log(hello.name)

// const hello = {
//     key1 : "value1",
//     key2 : "value2",
    
// }
// const hello = [
//      "value1"
// ]
// javascript function ==> function + object
// you can add your own properties 
hello.myOwnProperty = "another hello world "
console.log(hello.myOwnProperty) 
// name property ---> tells function name

// functions provide more useful properties

// console.log(hello.prototype)
// only functions provide prototype property
if(hello.prototype){
    console.log("prototype is present ")
}else{
    console.log("prototype is not present")
}
hello.prototype.abc = "abc"
hello.prototype.xyz = "xyz"
hello.prototype.sing = function(){
    return "raaaaaaam"
}
console.log(hello.prototype)
console.log(hello.prototype.sing())