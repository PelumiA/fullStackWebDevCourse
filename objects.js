var person = {
name: "groovy",
age: 21,
city: "STL"};

  }

  var dog = {
    name: "Fido",
    age: 3,
    breed: "Doodle"
  };

  var str = "name";
  someObject.str ; //doesnt look for "name";
  someObject[str]; //does evaluate str and looks for "name"

  person["age"] += 1;
  person.city = "London";
  //I prefer the dot notation

  var movie =
    [
      {name : "Superbad",
      rating : 5,
      hasWatched : true
  },
  {name : "RockNRolla",
  rating : 4,
  hasWatched : true
},
{name : "The Green Mile",
rating : 3,
hasWatched : false
},
{name:  "Pineapple Express",
rating : 4.5,
hasWatched : true
}]


// movie.forEach(function(element){
//   if(element.hasWatched){
//  console.log("You have watched " + "\"" + element.name+ "\" - " + element.rating + " stars");
// (}
//
// else{
//   console.log("You have not watched " + "\"" + element.name+ "\" - " + element.rating + " stars");
//   }
// });


//instead
movie.forEach(function(movie){
  console.log(buildString(movie);
});

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  }
  else{
    result += "not seen ";
  }
  result += "\"" + movie.name + "\" - ";
  result += movie.rating + " stars";
  return result;
}
