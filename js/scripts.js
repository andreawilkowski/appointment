$(document).ready(function(){
  $("form").submit(function(event){
    debugger;
    var name = $("#name").val();
    var food = $("#food").val();
    var flavor = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $("p").append(name);
    $("p").append(food);
    $("p").append(flavor);
    $("p").append(dob);
    $("p").append(favoriteColor);
    event.preventDefault();

  });
});
