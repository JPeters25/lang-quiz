function add(color,animal,music,food,phone){
  return color + animal + music + food + phone;
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const color = parseInt($("#color").val());
    const animal = parseInt($("#animal").val());
    const music = parseInt($("#music").val());
    const food = parseInt($("#food").val());
    const phone = parseInt($("#phone").val());
    
    const answer = add("#color"+"#animal"+"#music"+"#food"+"#phone")

    $("#answer").show()
    
// if (color === 1 || 2 && animal === 1 && music === 1 && food === 1 && phone === 1) {
//   $("#ruby").show();
//   $("#ruby").text();
// } else if (color === 2 || 3 && animal === 2 || 3 && music === 2 && food === 2 || 3 && phone === 2) {
//   $("#cSharp").show();
//   $("#cSharp").text();
// } else if (color === 1 || 3 && animal === 2 || 3 && music === 1 || 3   && food === 3 && phone === 1 || 3){
//   $("#javaScript").show(); 
//   $("#javaScript").text();
//     $("#lang").text(answer)
    
    });
  });
