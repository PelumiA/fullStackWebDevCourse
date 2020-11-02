
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input != "quit"){

  if(input=="list"){
    listTodos();
}
  else if(input=="new"){
    addTodo();
  }
  else if(input == "delete"){
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("okay, you quit i guess");

function listTodos(){
  console.log("*************");
  todos.forEach(function(todo,i) {
  console.log(i + ": "+ todo);
});
  console.log("*************");
}

function addTodo(){
  var newToDo = prompt("Enter new todo");
  todos.push(newToDo);
  console.log("Todo added");
}

function deleteTodo(){
  var index = prompt("what would you like to delete");
  todos.splice(index,1);
  console.log("Deleted Todo");
}
