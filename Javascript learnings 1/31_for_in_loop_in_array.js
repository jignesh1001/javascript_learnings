// for in loop in array 

const fruits = ["apple","mango","grapes","fruit4","fruit5"];

const fruits2 =[]
for(let i in fruits){
     fruits2.push(fruits[i].toUpperCase())    
}
console.log(fruits2);

