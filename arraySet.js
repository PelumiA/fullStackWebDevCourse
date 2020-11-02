function printReverse(nums){
  var len = nums.length;
  for(var i = nums.length-1; i>-1;i--){
    console.log(nums[i]);
  }
}

function isUniform(arr){
  var check = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(check !== arr[i]){
      return false;
    }
  }
      return true;
  }

function sumArray(nums){
  var sum = 0;
  nums.forEach(function (nums){
    sum += nums;
  });
  return sum;
}

function max(nums){
  var max = nums[0];
  for(var i=1; i<nums.length; i++){
    if(max < nums[i]){
      max = nums[i];
    }
  }
  return max;
}

var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
  if(isBlue){
    body.style.background = "white";
  }
  else{
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
},1000);
