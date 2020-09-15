//Selectors
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-do-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);

//Functions
function addToDo(event) {
  event.preventDefault();
  //Create todo Div
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  //Create todo LI
  const newToDo = document.createElement("li");
  newToDo.innerText = " hey";
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
}
