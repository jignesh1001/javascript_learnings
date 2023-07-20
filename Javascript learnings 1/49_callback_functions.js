// callback functions

function myFunc2(name,age){
    console.log("inside myFunc2");
    console.log(`My name is ${name} and i'm ${age} years old`);
}
function myFunc1(callback){
    console.log("inside myFunc1 and calling callback...");
    callback("Laxman",43);
}
myFunc1(myFunc2)
 

/* taking function as  input and calling it inside  

function mycallback(){
    function body
}

function myfunc(callback){
    callback()
}
myfunc(mycallback)

*/