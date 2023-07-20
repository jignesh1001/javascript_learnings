// functions

function twoPlusTwo(a, b) {
  return a + b;
}
const result = twoPlusTwo("Harish", " seth");
console.log(result);

// a,b are parameter
// 2.6,8 are called arguments
// function isEven (num)  {
  
//   return num % 2 == 0 ; 
// }
// console.log(isEven(4));

function searchTarget(arr,target){
    for(let i = 0;i < arr.length;i++){
        if( arr[i] == target){
            return i;
        }
    }
    return "not found";

}
const output = searchTarget([1,23,344,244,24],24)
console.log(output)


// arrow functions
const singHappyBirthDay = ()=>{
    console.log("Happy Birthday");
}
singHappyBirthDay();

const isEven = num => {
  
  return num % 2 == 0 ; 
}
console.log(isEven(4));

const firstchar = anystring => anystring[0];
console.log(firstchar("Happy"))