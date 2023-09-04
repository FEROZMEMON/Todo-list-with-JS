let input = document.querySelector(".todo")
let ol = document.querySelector("ol")

let todo = []

function addTodo(e) {
    e.preventDefault();

    // ol.innerHTML = ""

    todo.push(input.value)

    console.log(todo);

    for (let i = 0; i < todo.length; i++) {

        ol.innerHTML += `<li> ${todo[i]} </li> <button onclick="deleteTodo${i}" >Delete</button> 
        <button onclick="editTodo${i}">Edit</button> `
       
    }

    input.value = ""
}

function deleteTodo(i){
    ol.innerHTML = ""
    todo.splice(i, 1)
    ol.innerHTML += `<li> ${todo[i]} </li> <button onclick="deleteTodo${i}" >Delete</button> 
    <button onclick="editTodo${i}">Edit</button> `
   
}



























































    // function delete() {
    //     arr.splice(0, 1);
        // renderTasks();
    // }

    // function editTask() {
    //     const newText = prompt('Edit task:', arr[0]);
    //     if (newText !== null) {
    //         arr[0] = newText;
            // renderTasks();
    //     }
    // }

    // function renderTasks() {
    //     ul.innerHTML = "";
    //     for (let i = 0; i < .length; i++) {
    //         const list = todo[i];
    //         ul.innerHTML += `
    //         <li>${list}
    //             <button onclick="deleteTask(${i})">Delete</button>
    //             <button onclick="editTask(${i})">Edit</button>
    //         </li>`;
        // }
    // }









