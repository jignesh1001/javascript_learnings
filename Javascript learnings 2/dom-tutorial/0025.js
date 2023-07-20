const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTodoText = todoInput.value
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `
  newLi.innerHTML = newLiInnerHtml
//   console.log(newLi)
  todoList.append(newLi)
  todoInput.value = ""
  
})
 todoList.addEventListener('click',(e)=>{
    // CHECK IF USER CLICK ON DONE BUTTON
    // event delegation is used
    // console.log(e.target.classList) 
     if(e.target.classList.contains("remove")){
        // console.log(e.target.parentNode.parentNode)
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove()
     }
    

     if(e.target.classList.contains("done"))
     {   
        //  e.target.classList.add("undo")
        //  e.target.classList.remove("done")

        const liSpan = e.target.parentNode.previousElementSibling;
     liSpan.style.textDecoration = "line-through"
        // e.target.textContent = "undo"
        
       }
    

 })















