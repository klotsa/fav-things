$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    var foodInput = $("input#food").val();
    var drinkInput = $("input#drink").val();
    var filmInput = $("input#film").val();


    $(".food").text(foodInput);
    $(".drink").text(drinkInput);
    $(".film").text(filmInput);


    $("#output").show() ;

    event.preventDefault();
  });
});
