function printRev(arr)
{
  for(var i=arr.length-1; i>-1; i--)
  {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  var prev = arr[0];
  for(var i = 1; i<arr.length; i++)
  {
    if(prev !== arr[i])
    {
      return false;
    }
  }
  return true;
}

function sumArray(arr){
  var sum = 0;
  arr.forEach(function (e){
    sum += e;
  });
  return sum;
}

function max(arr)
{
  var max = arr[0];
  for(var i = 1; i<arr.length; i++)
  {
      if(max < arr[i])
      {
        max = arr[i];
      }
  }
  return max;
}
