// It uses an array to store the todos and displays them in a list.
let todos = [];

// This function adds a todo to the todos array and displays it in the list.
function addTodo() {
  const input = document.querySelector(".todo");
  let val = input.value;
  if (val == "") return;
  todos.push({ text: val, completed: false });
  console.log(todos);
  showTodos();
  input.value = "";
}
// This function deletes a todo from the todos array and updates the list.
function onDelet(index) {
  todos.splice(index, 1);
  console.log(todos);
  showTodos();
}
// This function toggles the completed status of a todo and updates the list.
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  showTodos();
  console.log(todos);
}

// This function displays the todos in the list element with the class "todo-list".
function showTodos() {
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";
  let data = "";
  for (let i = 0; i < todos.length; i++) {
    data += ` <li class="${todos[i].completed ? "completed" : ""}">
          <input type="checkbox" ${
            todos[i].completed ? "checked" : ""
          } onchange='toggleTodo(${i})'/>
          <span>${todos[i].text}</span>
          <button  onclick='onDelet(${i})' >X</button>
        </li>`;
  }
  list.innerHTML = data;
}
showTodos();

// Example of a function with default parameters

// This function takes an object with default values for name, age, and country.
// let alaa={
//     name:Alaa,
//     age:20,
//     country:Tulkarem
// }
// function fun(obj={name:"", age:0, country:""}) {
//   obj.
// }
// fun(alaa);