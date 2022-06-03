$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
     const inputColor = $("#color").val();
     const inputAnimal = $("#animal").val();
     const inputMusic = $("#music").val();
 
     if(inputColor === "Red" && inputAnimal === "Dog" && inputMusic === "Rock"){
     $('#ruby').show();
     $('form#quiz').hide();
   }else if(inputColor === "Blue" && inputAnimal === "Cat" && inputMusic === "Pop"){
     $('#cSharp').show();
     $('form#quiz').hide();
    }
  });
});