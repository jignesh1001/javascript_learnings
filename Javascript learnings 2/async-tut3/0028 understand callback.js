// understand callback
// function myfunc(callback){
//     console.log("Function is doing some task")
//     callback()
// }

// myfunc(function(){
//     console.log("Function is doing some task1")

// })
// myfun2()
function getTowNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    // console.log(number1,number2)
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

// function addTwoNumbers(num1 ,num2){
//     console.log( "Addition : " ,num1 + num2 )

// }
getTowNumbersAndAdd(
  '9',
  3,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => console.log("Wrong data type")
);
