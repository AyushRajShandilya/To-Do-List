let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push({ text, completed: false });
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let completed = 0;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("completed");
      completed++;
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.style.marginRight = "8px";
    completeBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    const btnGroup = document.createElement("div");
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    list.appendChild(li);
  });

  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("pendingTasks").textContent = tasks.length - completed;
}
