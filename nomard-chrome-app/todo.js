const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  toDos.forEach((toDo, index) => {
    console.log(typeof parseInt(li.id));

    if (toDo.id === parseInt(li.id)) {
      toDos.splice(index, 1);
    }
  });
  li.remove();
  // filter 이용하기
  // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 한번 더 저장해주기 실시간으로 확인가능
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

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
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  toDoInput.value = "";
  saveToDos();
}

// delete todo
function handdleToDoDelete(event) {
  event.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// locafStorage에 저장되어있으면 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 배열에 이전 toDos를 저장해줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
