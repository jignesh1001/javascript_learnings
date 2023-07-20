// Arrow functions

const user1 ={
    firstName : "Harshit",
    age : 19,  
    about : ()=>{
        console.log(this.firstName,this.age)
    }
}
const func = user1.about.bind(user1)
func()


// function declaration
// const user1 ={
//     firstName : "Harshit",
//     age : 19,  
//     about : function(){
//         console.log(this.firstName,this.age)
//     }
// }
// const func = user1.about.bind(user1)
// func()