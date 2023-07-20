// rest parameters
 const myFunc = function(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log("c is " , c);
 }
 myFunc(1,2,34,44,55)

 const addAll = (...numbers)=>{
    let total = 0;
    for(let num of numbers){
       total = total + num; 
    }
    return total;
 }
 let ans1 = addAll(1,33,44,5555,1,2,3)

 console.log(ans1);
const arr1 = [12,12,12,2,3,4,10]
 const fun1 = arr => {
    let total = 0;
    for(let element of arr){
       total = total + element; 
    }
    return total;
    
 }
 let ans2 = fun1(arr1);
 console.log(ans2)