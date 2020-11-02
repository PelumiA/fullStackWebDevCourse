var isEven = function(num){
  if(num % 2 == 0){
  return true;
  }
  else{
  return false;
  }
}


var factorial = function(num) {
  var result = 1;
  while(num > 0){
    result *= num;
    num--;
  }
  return result;
}

var kebabToSnake = function(str){
  var res = str.replace(/-/g, "_");
  return res;
}
