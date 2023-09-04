let input = document.querySelector(".todo")
let ol = document.querySelector("ol")



let todo = []

function addTodo(e) {
    e.preventDefault();

    if (input.value == "") {
        alert("enter the task")

    }
    else {


        ol.innerHTML = ""

        todo.push(input.value)

        console.log(todo);

        for (let i = 0; i < todo.length; i++) {

            ol.innerHTML += `<li> ${todo[i]} </li> <button onclick="deleteTodo(${i})" >Delete</button> 
        <button onclick="editTodo(${i})">Edit</button> `

        }

        input.value = ""
    }
}
function deleteTodo(i) {
    ol.innerHTML = ""
    todo.splice(i, 1)

    for (let i = 0; i < todo.length; i++) {

        ol.innerHTML += `<li> ${todo[i]} </li> 
    <button onclick="deleteTodo(${i})" >Delete</button> 
    <button onclick="editTodo(${i})">Edit</button> `
    }

}


function editTodo(i) {
    ol.innerHTML = ""

    let user = prompt("Edit the list")

    todo.splice(i, 1, user)
    for (let i = 0; i < todo.length; i++) {

        ol.innerHTML += `<li> ${todo[i]} </li> 
     <button onclick="deleteTodo(${i})" >Delete</button> 
     <button onclick="editTodo(${i})">Edit</button> `

    }

}

console.log(todo);























