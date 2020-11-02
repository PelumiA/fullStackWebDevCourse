var p1Button = document.querySelector("#p1");
var p1Score = 0;
var p1Display = document.getElementById("p1Display");

var p2Button = document.querySelector("#p2");
var p2Score = 0;
var p2Display = document.getElementById("p2Display");

//var win = document.getElementById("max");
var numInput = document.querySelector("input");
var gameOver = false;

var paragraph = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var win = 5;


var resetB = document.getElementById("reset");
p1Button.addEventListener("click", function(){
  //increment h1[0]
  if(!gameOver){
  p1Score++;
  if(p1Score === win){
    console.log("Game over");
    gameOver = true;

    p1Display.classList.add("winner");
  }
  p1Display.textContent = p1Score;
  }
});


p2Button.addEventListener("click", function(){
  //increment h1[0]
  if(!gameOver){
  p2Score++;
  if(p2Score === win){
    console.log("Game over");
    gameOver = true;
    p2Display.classList.add("winner");
  }
  p2Display.textContent = p2Score;
  }
});

resetB.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  win = Number(numInput.value);
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
