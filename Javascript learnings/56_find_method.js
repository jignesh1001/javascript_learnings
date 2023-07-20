// find method
const array1 = ["Oggy","jackk","paplu","zaplu"];

const ans = array1.find((string)=> string.length === 5)
console.log(ans)
  
const users = [
    {userId : 1,userName : "Ankit"},
    {userId : 2,userName : "Ankita"},
    {userId : 3,userName : "Harman"},
    {userId : 4,userName : "Jagdish"},
    {userId : 5,userName : "JEET"},
]
const potentialCustomer = users.find((user)=> user.userName.length == 4)
console.log(potentialCustomer)