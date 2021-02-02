// DOM ELEMENTS
const todoInp = document.querySelector(".todo-inp");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const delTodos = document.querySelector(".del-todos");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
delTodos.addEventListener("click", deleteAllTodos);
todoList.addEventListener("click", deleteTodo);

// Call Todos
getTodos();

// Add Todo DOM
function addTodo(e) {
  e.preventDefault();

  const div = document.createElement("div");
  div.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoBtn.value;

  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.classList.add("todo-x");

  saveLocalStorage(todoInp.value);

  div.appendChild(newTodo);
  div.appendChild(delBtn);
  todoInp.value = "";

  todoList.append(div);

  window.location.reload("/");
}

// Delete Todo clicked
function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "todo-x") {
    const todo = item.parentElement;
    removeLocalStorage(todo);
    todo.addEventListener("transitioned", (e) => {
      todo.remove();
    });
  }
  window.location.reload();
}

// Save Todos in Local Storage
function saveLocalStorage(todo) {
  let todos = getItemTodos();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove Local Storage white todo index
function removeLocalStorage(todo) {
  let todos = getItemTodos();
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Check is todos is null if not is, getItem todos and assign todos
function getItemTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// Get Todos of Local Storage
function getTodos() {
  let todos = getItemTodos();

  todos.forEach(function (todo) {
    // div
    const div = document.createElement("div");
    div.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    div.appendChild(newTodo);

    // create button
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.classList.add("todo-x");
    div.appendChild(delBtn);

    todoInp.value = "";

    todoList.appendChild(div);
  });
}

// Delete all todos of Local Storage
function deleteAllTodos() {
  localStorage.removeItem("todos");
  document.location.reload();
}
