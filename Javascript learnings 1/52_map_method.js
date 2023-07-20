// map method
const arr = [1,2,3,4,5]

const result = arr.map((Number,index)=>{
    return `index is ${index} : corresponding square is ${Number * Number}`;
})
console.log(result)

const users =[
    {firstName : "Umesh",age : 22},
    {firstName : "Rakesh",age : 21},
    {firstName : "Ganesh",age : 21},
    {firstName : "Durgesh",age : 23},
 ]

 const usernames =users.map(user => user.firstName)
 console.log(usernames)