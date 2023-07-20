// block scope vs function scope
// let and const are block scope
// var is function scope    
{
    let firstName = "Sonu"
    console.log(firstName)
}

{
    var firstName = "Bheem"
    console.log(firstName)
}
{
    const firstName = "Monu"
    console.log(firstName)
}
const firstName = "Shan"
    console.log(firstName)
function myapp(){
    if(true){
        var firstName = 'harshit'
        console.log(firstName)
    }
    if(true){
        var firstName = 'harshit'
        console.log(firstName)
    }
    console.log(firstName)
    
}
myapp()