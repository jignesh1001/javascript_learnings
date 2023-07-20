// for loop in array

let fruits = [ "apple","mango", "grapes", "banana"];

for(let i =0; i<= 9; i++)
{
    // console.log(i)
}

// console.log(fruits.length)
// console.log(fruits[2])
// console.log(fruits[fruits.length-2])
let fruitsNew =[] 
for(let i = 0;i<=fruits.length-1;i++){
    fruitsNew.push(fruits[i].toUpperCase())
    console.log(fruits[i])
}
console.log(fruitsNew);