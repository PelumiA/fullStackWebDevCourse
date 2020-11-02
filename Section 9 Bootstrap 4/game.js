var secretNumber = 4;

var guess = Number(prompt("Enter your guess"));


if((guess) == secretNumber){
  alert("You got it");
}
else if((guess) > secretNumber){
  alert("Too high, guess lower");
}

else {
  alert("lower.. guess again");
}
