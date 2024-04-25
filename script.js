document.getElementById("add_todo").addEventListener("click", () => {
  const todoInput = document.getElementById("todo_input");
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Enter a Todo");
    return;
  }
  const todoList = document.getElementById("todo_list");
  const newTask = document.createElement("li");

  const todoSpan = document.createElement("span");
  todoSpan.className = "todo_text";
  todoSpan.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete_button";
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(newTask);
  });
  newTask.appendChild(todoSpan);
  newTask.appendChild(deleteButton);

  newTask.addEventListener("click", () => {
    todoSpan.classList.toggle('completed');
  });
  todoList.append(newTask);
  
  todoInput.value = '';
});
