// object inside array
// very useful in real world application

const users = [
    {userId : 1,firstName : "Jack",gender : "Male"},
    {userId : 2,firstName : "Optimus",gender : "Male"},
    {userId : 3,firstName : "Kevin",gender : "Male"}
]
for(user of users){
console.log(user.firstName);}
