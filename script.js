//Selectors
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-do-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addToDo(event) {
  event.preventDefault();
  //Create todo Div
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("to-do");
  //Create todo LI
  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("to-do-item");
  toDoDiv.appendChild(newToDo);
  //Checked mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);
  //Checked trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  //Append tolist
  todoList.appendChild(toDoDiv);
  //Clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //add animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
