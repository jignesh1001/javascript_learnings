// "use strict"
// console.log(this.alert("Hello world"))

function hello(){
    console.log("Hello World")
}
// hello()
function about(hobby, favMusician,city ){
    console.log(`${this.firstName} age ${this.age} likes ${hobby} and listens to ${favMusician} lives in ${city}`)
}
const user1 ={
    firstName : "Harshit",
    age : 19,  
 }
const user2 ={
    firstName : "Harshita",
    age : 19,
    
    }
    // about.apply(user2,["football","KK","Mumbai"])
    // const func = about.bind(user2,"football","KK","Mumbai")
    // // console.log(func)
    // func()
    // while using .call method parameter has to be specified object in this case
    // it decides which object will bind with this keyword
    // about.call(user1,'football','messi')
//     user1.about()
    // about.apply(user1,['football','Ronaldo'])
    
// const func1 = about.bind(user1,'football','zlatan')
// console.log(func1)
// func1()

const myfunc1 = about.bind(user2,"football","Eminem","Mumbai")
myfunc1()
// about.bind(user2,"football","Eminem","Mumbai")