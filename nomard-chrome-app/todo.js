const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = toDoInput.value;
  toDoInput.value = "";
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
