// parameter destructring

const user = {
    firstName : "Jack",
    age : 12,
}
// const getUserDetails= (obj)=>{
//     console.log(obj.firstName)
//     console.log(obj.age)
// }
// getUserDetails(user)

const getUserDetails= function({firstName,age}){
    console.log(firstName)
    console.log(age)
}
getUserDetails(user)