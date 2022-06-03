$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const inputColor = $("#color").val();
    const inputAnimal = $("#animal").val();
    const inputMusic = $("#music").val();
    const inputFood = $("#food").val();
    const inputPhone = $("#phone").val();
 
     if (inputColor === "Red" || "Blue" && inputAnimal === "Dog" && inputMusic === "Rock" && inputFood === "Burgers" && inputPhone === "Apple") {
    $('#ruby').text();
    $('#ruby').show();
      } else if (inputColor === "Blue" && inputAnimal === "Cat" || "Bird" && inputMusic === "Pop" && inputFood === "Tacos" || "Burgers" &&inputPhone === "Samsung") {
    $('#cSharp').text();
    $('#cSharp').show();
      } else if
        (inputColor === "Green" && inputAnimal === "Bird" && inputMusic === "Broadway" || "Rock" && inputFood === "Sushi" && inputPhone === "Other"){
    $('#javaScript').text();       
    $('#javaScript').show();

        }  
      }) 
});
