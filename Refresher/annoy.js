// var answer = prompt("are we there yet");
//
// while(answer !== "yes" && answer !== "yeah" )
// {
//   var answer = prompt("are we ther yet")''
// }
//
// alert("Yay we made it");

//Version 2

var answer = prompt("are we there yet");
//Continues loop if "yes is nowhere in the string"
while(answer.indexOf("yes") === -1)
{
  var answer = prompt("are we ther yet")''
}

alert("Yay we made it");
