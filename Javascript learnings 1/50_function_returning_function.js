// function returning function

function func1() {
    
    return func2;
}

const ans = func1();
console.log(ans())
// ans()

function func2(){
    return "Hello world"
}
// this is working because function declarations are hoisted