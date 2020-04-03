import "./styles.css";

const $todoAdd = document.getElementById("todo-add");
const $todoInput = document.getElementById("todo-input");
const $list = document.getElementById("todo-list");

$todoAdd.addEventListener("click", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const value = $todoInput.value;
  value && addTodo(value);
}

function addTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("button");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "todo-complete-checkbox";
  span.textContent = todo;
  span.className = "todo-text";
  delButton.textContent = "X";
  delButton.className = "todo-delete-button";
  li.addEventListener("click", removeTodo);
  li.append(checkbox);
  li.append(span);
  li.append(delButton);
  $list.appendChild(li);
  $todoInput.value = "";
}

function removeTodo(event) {
  if (event.target.className === "todo-delete-button") {
    event.currentTarget.remove();
  }
  if (event.target.className === "todo-complete-checkbox") {
    const text = event.currentTarget.getElementsByClassName("todo-text")[0];
    if (event.target.checked) {
      const currentClass = text.className || "";
      text.className = currentClass + " strike-through";
    } else {
      text.className = "todo-text";
    }
  }
}
