// setInterval

// console.log("script start")
// setInterval(()=>{
//     console.log(Math.random())
// },1000)

// console.log("script end") 

const body = document.body

const interValID = setInterval(()=>{
    const r = Math.floor(Math.random()  * 126)
    const g = Math.floor(Math.random()  * 126)
    const b = Math.floor(Math.random()  * 126)
    const rgb = `rgb(${r},${g},${b})`
    
    body.style.background = rgb
    // console.log(rgb)
},1000)

console.log(interValID)
const button = document.querySelector('button')
button.addEventListener('click',()=>{
    clearInterval(interValID)
    button.textContent = body.style.background
})

 
