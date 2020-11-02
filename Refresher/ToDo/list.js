var todos = ["Buy new turtle"];

var input = prompt("what would you like to do?")
//check input
while(input !== "quit"){
  if(input === "list"){
    listTodos();
  }
  else if (input === "new")
  {
    addTodo();
  }
  else if(input === "delete"){
    deleteTodo();
  }
input = prompt("what would you like to do?");
}
console.log("You quit the app");

function listTodos(){
  console.log("************");
  todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
  });
  console.log("*************");
}

function addTodo()
{
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added item");
}

function deleteTodo()
{
  //ask for index of // TODO:
    var index = prompt("Enter index of todo to delete");
    //splice!
    todos.splice(index,1);
    console.log("item deleted");
 }
