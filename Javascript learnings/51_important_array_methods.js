// important array methods

const numbers = [11,22,33,44];

function myFunc(number ,index){
    console.log(`number is ${number} index is ${index}`);
}


for(let i = 0;i < numbers.length; i++){
    myFunc(numbers[i],i)
}


numbers.forEach( 

   function(number,index) {console.log(`number is ${number} index is ${index}`)}
   
   )

numbers.forEach(

   (data,dataitem,list)=>console.log(`multiplying each element by 2 gives ${data *2} which is at index ${dataitem} and in  ${list}`)
   
   )

const users =[
   {firstName : "Umesh",age : 22},
   {firstName : "Rakesh",age : 21},
   {firstName : "Ganesh",age : 21},
   {firstName : "Durgesh",age : 23},
]

 users.forEach(user => console.log(`users firstname is ${user.firstName} age is ${user.age}`))
