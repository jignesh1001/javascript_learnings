// function inside function

const app = ()=> {
    console.log("inside app");
    const myfun = ()=>{
        console.log("Hello world")
    }
    const addTwo = (num1,num2)=>{
        return num1 +num2;
    }
    const mul = (num1,num2)=> num1*num2;
    myfun();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
    
}
app();