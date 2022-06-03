
$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
const color = $("#color").val();
const animal = $("#animal").val();
const music = $("#music").val();
const food = $("#food").val();
const phone = $("#phone").val();
   
if (color === "Red" || "Blue" && animal === "Dog" && music === "Rock" && food === "Burgers" && phone === "Apple") {
  $("#ruby").show();
  $("#ruby").text();
} else if (color === "Blue" && animal === "Cat" || "Bird" && music === "Pop" && food === "Tacos" || "Burgers" && phone === "Samsung") {
 
  $("#cSharp").show();
  $("#cSharp").text();
} else if (color === "Green" && animal === "Bird" && music === "Broadway" || "Rock" && food === "Sushi" && phone === "Other"){
  
  $("#javaScript").show(); 
  $("#javaScript").text();
    
    }  
  }) 
});
