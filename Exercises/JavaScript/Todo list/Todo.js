

var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?")

while (input !== "quit") {
    if (input === "list") {
        ListTodos();
    } else if (input === "new") {
        AddTodo();
    } else if (input === "delete") {
        DeleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP")


function ListTodos() {
    todos.forEach(function (todo, index) {
        console.log("**********")
        console.log(index + ": " + todo);
    });
    console.log("**********")
}

function AddTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo")
}

function DeleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1)
    console.log("Deleted Todo")
}