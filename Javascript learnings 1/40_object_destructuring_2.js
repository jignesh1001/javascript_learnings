// object destructring
const users = [
    {userId : 1,firstName : "Jack",gender : "Male"},
    {userId : 2,firstName : "Optimus",gender : "Male"},
    {userId : 3,firstName : "Kevin",gender : "FeMale"}
]
const [{firstName : fName1,gender : gender1,userId}, ,{gender: gender3,firstName : fName3}] = users;
// const [user1,...rest] = users;
console.log(fName1,":",gender1,":",userId);
console.log(fName3,":",gender3);
// console.log(firstNameuser3,":",genderuser3)
// console.log(user3gender);
// console.log(user1)
// console.log(rest)