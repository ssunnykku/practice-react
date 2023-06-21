const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  toDoList.addEventListener("click", deleteToDo);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.appendChild(deleteBtn);
}

// adding todo
function handleToDoSubmit(event) {
  event.preventDefault();
  // saving
  // toDos.push(toDoInput.value);
  paintToDo(toDoInput.value);
  toDoInput.value = "";
}

// delete todo
function handdleToDoDelete(event) {
  event.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
