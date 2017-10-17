$(document).ready(function(){
  $("form").submit(function(event){
    debugger;
    var food = $("#food").val();
    var flavor = $("input:radio[name=music]:checked").val();
    event.preventDefault();
  });
});
