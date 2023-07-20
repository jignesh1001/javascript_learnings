// lexical scope

let myVar = "value1";   
function myapp(){
    const fun1 = ()=>{
        const myFunc2 = () => {
            
            console.log("Inside fun1",myVar)
            }
            myFunc2();
    }
    const fun2 = function(){

    }
    function fun3 (){

    }
    console.log(myVar);
    fun1();
}
myapp();