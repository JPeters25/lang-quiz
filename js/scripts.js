$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
     const inputColor = $("#color").val();
     const inputAnimal = $("#animal").val();
     const inputMusic = $("#music").val();
     const inputFood = $("#food").val();
     const inputPhone = $("#phone").val();
 
     if(inputColor === "Red" && inputAnimal === "Dog" && inputMusic === "Rock" && inputFood === "Burgers" && inputPhone === "Apple"){
     $('#ruby').show();
   } if(inputColor === "Blue" && inputAnimal === "Cat" && inputMusic === "Pop" && inputFood === "Tacos" &&inputPhone === "Samsung") 
     $('#cSharp').show();
     if(inputColor === "Green" && inputAnimal === "Bird" && inputMusic === "Broadway" && inputFood === "Sushi" && inputPhone === "Other"){
      $('#javaScript').show();
    } 
    });
  });