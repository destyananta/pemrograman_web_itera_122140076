// JavaScript untuk To-Do List
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addTodoButton = document.getElementById("add-todo");

// Buat elemen <datalist> untuk rekomendasi
const historyList = document.createElement("datalist");
historyList.id = "todo-history";
document.body.appendChild(historyList);
todoInput.setAttribute("list", "todo-history");

// Fungsi untuk menambahkan item baru
function addTodo() {
  if (todoInput.value.length > 0) {
    const li = document.createElement("li");
    li.textContent = todoInput.value;

    const doneButton = document.createElement("button");
    doneButton.textContent = "✔";
    doneButton.onclick = () => {
      li.classList.toggle("done");
      saveTodos();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = () => {
      li.remove();
      saveTodos();
    };

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    saveTodos();
    todoInput.value = "";
  }
}

addTodoButton.addEventListener("click", addTodo);

// Fungsi menyimpan ke localStorage
function saveTodos() {
  const todos = [];
  todoList.querySelectorAll("li").forEach((li) => {
    todos.push({
      text: li.textContent.replace("✔❌", "").trim(),
      completed: li.classList.contains("done"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  updateHistory();
}

// Memuat data dari localStorage
window.onload = function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) {
      li.classList.add("done");
    }

    const doneButton = document.createElement("button");
    doneButton.textContent = "✔";
    doneButton.onclick = () => {
      li.classList.toggle("done");
      saveTodos();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = () => {
      li.remove();
      saveTodos();
    };

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
  updateHistory();
};

// Fungsi memperbarui daftar rekomendasi
function updateHistory() {
  historyList.innerHTML = "";
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const uniqueTodos = new Set(todos.map((todo) => todo.text)); // Menghindari duplikasi

  uniqueTodos.forEach((text) => {
    const option = document.createElement("option");
    option.value = text;
    historyList.appendChild(option);
  });
}

// JavaScript untuk Kalkulator
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  console.log("num1:", num1, "num2:", num2); // Tambahkan log untuk memeriksa nilai input

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Result: Invalid input";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        result = "Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "modulus":
      if (num2 === 0) {
        result = "Cannot perform modulus by zero";
      } else {
        result = num1 % num2;
      }
      break;
    case "power":
      result = Math.pow(num1, num2);
      break;
    case "sqrt":
      result = Math.sqrt(num1);
      break;
    default:
      result = "Invalid Operation";
  }
  document.getElementById("result").textContent = "Result: " + result;
}

// JavaScript untuk Validasi Form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 3) {
    alert("Nama harus lebih dari 3 karakter");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Email harus valid");
    return false;
  }
  if (password.length < 8) {
    alert("Password harus minimal 8 karakter");
    return false;
  }
  alert("Form valid!");
  return true;
}
