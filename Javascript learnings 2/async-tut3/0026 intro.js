// synchronous programming vs asynchronous programming
// console.log("script starts")
// for(let i = 0; i< 1000;i++){
//     console.log("inside loop")
// }
// console.log("script ends")

// setTimeout


console.log("script starts")

const id = setTimeout(()=>{
    console.log("inside settimeout")
},0)
for(let i = 1;i<100;i++){
    console.log("....")
}
console.log("settimeout id is", id)
console.log("clearing time out")
clearTimeout(id)
console.log("script end")

