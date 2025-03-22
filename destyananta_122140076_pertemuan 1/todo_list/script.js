document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", toggleTask);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    saveTasks();
    updateAutocomplete();
}

function toggleTask(event) {
    event.target.classList.toggle("done");
    saveTasks();
}

function deleteTask(event) {
    event.stopPropagation();
    event.target.parentElement.remove();
    saveTasks();
    updateAutocomplete();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({ text: li.firstChild.textContent, done: li.classList.contains("done") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.text;
        if (task.done) li.classList.add("done");
        li.addEventListener("click", toggleTask);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", deleteTask);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    });
    updateAutocomplete();
}

function updateAutocomplete() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let dataList = document.getElementById("taskDatalist");
    if (!dataList) {
        dataList = document.createElement("datalist");
        dataList.id = "taskDatalist";
        document.body.appendChild(dataList);
        document.getElementById("task").setAttribute("list", "taskDatalist");
    }
    dataList.innerHTML = "";
    tasks.forEach(task => {
        let option = document.createElement("option");
        option.value = task.text;
        dataList.appendChild(option);
    });
}
