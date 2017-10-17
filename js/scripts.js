$(document).ready(function(){
  $("form").submit(function(event){
    debugger;
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var starttimeInput = $("input#start-time").val();
    var endtimeInput = $("input#end-time").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start-time").text(starttimeInput);
    $(".end-time").text(endtimeInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
