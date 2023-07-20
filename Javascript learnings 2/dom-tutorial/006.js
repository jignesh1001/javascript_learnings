// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

// let navItems = document.getElementsByTagName("a") // html collection
// console.log(navItems)
// for(let i = 0;i<navItems.length;i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "black";
//     navItem.style.Color = "white";
 
    
// for(let navItem of navItems){
        
//     navItem.style.backgroundColor = "black";
//     navItem.style.Color = "white";
//     navItem.style.Color = "white";
// }

// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "black";
//     navItem.style.Color = "white";
//     navItem.style.fontWeight = "bold"
// });
// simple for loop
// for of loop
// can not use forEach method to iterate through HTMLCollection


// const navItems = document.querySelectorAll(".nav-item") // NodeList
// console.log(navItems[1])


let navItems = document.querySelectorAll("a")
console.log(navItems)
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "black";
//     navItem.style.Color = "white";
//     navItem.style.fontWeight = "bold"
// }

navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "black";
    navItem.style.Color = "white";
    navItem.style.fontWeight = "bold"
})
