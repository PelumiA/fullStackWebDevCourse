alert("Hello from the JS file");
/*var firstName = prompt("Enter your name");
var lastName = prompt("Enter last name");
var age = prompt("Enter your age");

console.log("Your full name is " + firstName + " " + lastName);
console.log("You are " + age + " years old");

*/
//Age Calculator

/*
var age = prompt("Enter your age");
var days = age * 365.25;
alert(age + " years is approximately " + days + " days.");
*/

var age = prompt("Enter your age");

if(age%2 ==1){
  console.log("Your age is odd");
}

if(age <18){
  if(age <0){
      console.log("You buggin. you lower than low");
    }
    else{
  }
  console.log("Yeah you're too young mate");
}



else if (age <21) {
  console.log("You can party, but you can't drink");

}

else if(age == 21){
  console.log("Happy Birthday.. free shot");
}

else if(age% Math.sqrt(age == 0)){
  console.log("Your age is a perfect square");
}

else{
  console.log("Come on thru, you can do it all");
}
