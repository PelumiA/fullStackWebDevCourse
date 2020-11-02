var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var isPurple = false;

// button.addEventListener("click", function(){
//   paragraph.textContent = "Someone Clicked on me!";
// });

button.addEventListener("click", function(){
  // if(isPurple){
  //   document.body.style.background = "white";
  //   isPurple =  false;
  // }
  // else{
  // document.body.style.background = "purple";
  // isPurple = true;
  document.body.classList.toggle("purple");
});
