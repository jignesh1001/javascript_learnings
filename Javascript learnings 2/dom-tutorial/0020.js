console.log("Script starts")

const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons)
allButtons.forEach(buttons => {
    buttons.addEventListener("click",(e)=>{
        let num = 0
        for(let i =0;i <= 1000000;i++){
            num += i;
            // console.log(num)
        }
        console.log(e.currentTarget.textContent,num)
    })
});

let outerVar = 0
for(let i = 0;i<=1000000;i++){
    outerVar += i;
}
console.log("value of outer variable is",outerVar)
console.log("Script ends")
