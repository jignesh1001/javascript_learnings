const allButtons = document.querySelectorAll(".my-buttons button")
console.log(allButtons)
// for(let x of allButtons){
//     x.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this.textContent)
    })

})