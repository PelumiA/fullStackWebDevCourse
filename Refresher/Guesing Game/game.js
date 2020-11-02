//create secret number
var secret  = 4;

///ask user for Guessing
var guess = Number(prompt("Guess a number"));

while(guess != secret) {
//check if guess is right
if(guess === secret){
  alert("You got it right!");
}
//Otherwise check if higher

else if(guess > secret)
{
  alert("too high, guess again")
}
//check if lower

else{
  alert("too low, guess agin");
}
guess = Number(prompt("Guess a number"));
}

alert("You got it right!");
