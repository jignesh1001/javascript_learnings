// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list")


const li = document.createElement("li")

li.textContent = "new todo"

const referenceNode = document.querySelector(".first-node")

ul.insertBefore(li,referenceNode)
ul.removeChild(referenceNode) 
console.log(window.innerHeight)
console.log(window.innerWidth)
