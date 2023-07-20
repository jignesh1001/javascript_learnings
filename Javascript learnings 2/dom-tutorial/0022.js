const mainButton = document.querySelector("button")
// console.log(mainButton) 
const body = document.body;
const currentColor = document.querySelector('.current-color')
function randomColorGenerator(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const randomColor = `rgb(${r},${g},${b})`
    return randomColor;
}
mainButton.addEventListener("click",(e)=>{
    const randomColor = randomColorGenerator()
    console.log(randomColor)
    console.log(e.target)
    body.style.backgroundColor = randomColor
    currentColor.textContent = randomColor
})
