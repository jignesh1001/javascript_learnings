// event bubbling 
// event capturing
const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// capturing eventd
// child.addEventListener('click',()=>{
//     console.log("capture !!! child")
// },true)
// parent.addEventListener('click',()=>{
//     console.log("capture !!! parent")
// },true)
// grandparent.addEventListener('click',()=>{
//     console.log("capture !!! grandparent")
// },true)
// document.body.addEventListener('click',()=>{
//     console.log("capture !!! document.body")
// },true)

// not captured

// child.addEventListener('click',()=>{
//     console.log("Bubbled child")
// })
// parent.addEventListener('click',()=>{
//     console.log("Bubbled parent")
// })
// grandparent.addEventListener('click',()=>{
//     console.log("Bubbled grandparent")
// })
// document.body.addEventListener('click',()=>{
//     console.log("Bubbled document.body")
// })


// event delegation
grandparent.addEventListener('click',(e)=>{
    console.log(
        e.target.textContent   
    )
})
