function getCurrentTime() {
  return new Date().toLocaleString();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const taskRow = document.createElement("div");
  taskRow.className = "task-row";

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnBox = document.createElement("div");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete";
  completeBtn.onclick = function () {
    completeTask(li, span, time);
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText;
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  btnBox.appendChild(completeBtn);
  btnBox.appendChild(editBtn);
  btnBox.appendChild(deleteBtn);

  const time = document.createElement("span");
  time.className = "time";
  time.textContent = "Added: " + getCurrentTime();

  taskRow.appendChild(span);
  taskRow.appendChild(btnBox);
  li.appendChild(taskRow);
  li.appendChild(time);

  document.getElementById("pendingList").appendChild(li);
  input.value = "";
}

function completeTask(taskItem, textSpan, timeSpan) {
  textSpan.classList.add("completed");
  timeSpan.textContent = "Completed: " + getCurrentTime();

  taskItem.querySelector(".complete").remove();
  taskItem.querySelector(".edit").remove();

  document.getElementById("completedList").appendChild(taskItem);
}



