const allButtons = document.querySelectorAll(".my-buttons button")
allButtons.forEach(button => {
    button.addEventListener("click",(e)=>{
        console.log(e.target)
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    })
    })