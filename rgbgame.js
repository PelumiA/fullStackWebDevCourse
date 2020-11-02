var game = {}

game.init = function(){
  setupModeButtons();
  setupSquares();
  reset();
}

game.init();

var squares = document.querySelectorAll(".square");
var numSquares = 6;
var colors = []

var pickedColor = []
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easy")
//var hardButton = document.querySelector("#hard")
var modeButtons = document.querySelectorAll(".mode");
init();


function init(){
//mode buttons
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  //add click listeners for squares
  for(var i = 0; i<squares.length; i++){
    squares[i].addEventListener("click", function(){
      //grab color of square
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        message.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      else{
        this.style.backgroundColor= "#232323";
        //display try again
        message.textContent = "Try Again";
      }

    });
  }
}
function reset(){
  //generate new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colors of squares
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
  else{
    squares[i].style.display = "none";
  }
}
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  message.textContent = "";

}

// easyButton.addEventListener("click", function(){
//   easyButton.classList.add("selected");
//   hardButton.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//     squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardButton.addEventListener("click", function(){
//   hardButton.classList.add("selected");
//   easyButton.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
reset();
});

function changeColors(color){
  //loop through all squares
  for(var i = 0; i< squares.length; i++){

    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickColor(){
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i<num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var r =  Math.floor(Math.random() * 256);
  var g =  Math.floor(Math.random() * 256);
  var b =  Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
