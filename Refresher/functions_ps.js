var isEven = function(x){
  if(x%2 === 0){
    return true;
  }
  return false;
}

var fact = function(x){
  var sum = 1;
  while(x>0)
  {
    sum *= x;
    x--;
  }
  return sum;
}

var kebabToSnake = function(str)
{
//replace - with _
var newStr = str.replace(/_/g, "-");
return newStr;
}
