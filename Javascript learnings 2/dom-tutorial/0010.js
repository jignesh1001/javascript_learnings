// document.createElement()
// append
// prepend
// remove

// first element
// const newTodoItem = document.createElement("li") 
// // const newTodoItemText = document.createTextNode("Teach student")
// newTodoItem.textContent = "Teach students"
// // newTodoItem.appendChild(newTodoItemText)
// const todoList = document.querySelector(".todo-list")
// // todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)
// todoList.remove(newTodoItem)

// console.log(todoList)


const newTodoItem = document.createElement("li")
newTodoItem.classList.add('todo-list\li');
newTodoItem.textContent = "Teach Students"
const todoList = document.querySelector(".todo-list")
todoList.before(newTodoItem)

