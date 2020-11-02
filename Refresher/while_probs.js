//Print all numbers between -10 - 19

var num = -10;
while(num <20){
  console.log(num);
  num++;
}
console.log(For Loops);
for(var num =-10; num<20; num++){
  console.log(num);
}



//print all even numbers 10-40
num = 10;
while(num<41){
  if(num %2 == 0)
  {
  console.log(num);
  }
  num++;
}
console.log(For Loop!);
for(var num = 10; num<41; num+=2)
{
  console.log(num);
}

//print all odd nubmers between 300 and 333
num = 300;
while(num<334){
  if(num %2 == 1)
  {
  console.log(num);
  }
  num++;
}

console.log(For Loops);

for(var i= 300; i<334; i++){
  if(i%2 === 1){
  console.log(i);
  }
}

//print all divisible numbers by 5 AND 3 5-50
num = 5;
while(num<51){
  if(num %5 == 0 && num%3 == 0)
  {
  console.log(num);
  }
  num++;
}

console.log(For Loops);

for(var i = 5; i<51; i++){
  if(i % 5 === 0 & i%3 === 0)
  {
    console.log(i);
  }
}
