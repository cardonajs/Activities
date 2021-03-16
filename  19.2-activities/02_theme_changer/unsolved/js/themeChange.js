

$(".themeChange").on("click", function(){
    if ($(this).hasclass("regular")){
        $("#theme").attr("href","css/blank.css")
        console.log("it works!");
      }

  
  else if ($(this).has("blue")) {

     
$("#theme").attr("href", "css/dark.css")
console.log("its very dark in here");



  }
  