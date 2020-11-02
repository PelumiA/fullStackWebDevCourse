//Check off To Dos by clicking
$("ul").on("click","li", function(){
//if li is gray, turn it black using a CSS class toggle isntead of all this code!!!
  $(this).toggleClass("completed");
});



//Click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type= 'text']").keypress(function(event){
  if(event.which === 13){
  //grab text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});


$(".fa-plus").click(function(){
	$("input[type= 'text']").fadeToggle();
});
