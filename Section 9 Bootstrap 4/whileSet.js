console.log("All numbers -10-19:");
var one = -10;
while(one < 20){
  console.log(one);
  one++;
}

console.log("All even numbers 10-40");
var two = 10;
while(two < 41){
  console.log(two);
  two += 2;

}

console.log("All odd numbers 300-333");
var three = 300;
while(three < 334){
  if(three % 2 == 1){
  console.log(three);
  }
  three++;

}

console.log("divisible by 5 and 3 5-50");
var four = 5;

while(four < 51){
  if (four % 5 == 0 && four % 3 == 0){
    console.log(four);
    }
    four++;
  }
