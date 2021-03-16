$('.tab').on("click", function(){
  if ($(this).hasclass("tab1")){
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $("#tabContent1").css("display","block");
        $("#tabContent2").css("display","none");
  }

  else if ($(this).hasclass("tab2")){
    $(".tab2").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display","block");
    $("#tabContent2").css("display","none");
  }



});

