$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    var foodInput = $("input#food").val();
    var drinkInput = $("input#drink").val();
    var filmInput = $("input#film").val();

    var favorites = [];
    var favs2 = [];


    favorites.push(foodInput, drinkInput, filmInput);
    favs2.push(favorites[1], favorites[2]);


    $(".food").text(foodInput);
    $(".drink").text(drinkInput);
    $(".film").text(filmInput);
    $(".favorites").text(favorites);
    $(".favs2").text(favs2);
    $("ul").append("<li>" + favorites[0] + "</li>");
    $("ul").append("<li>" + favorites[1] + "</li>");

    $("#output").show() ;

    event.preventDefault();
  });
});
