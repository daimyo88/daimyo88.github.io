$(function(){
  $("li").on("click", function(e){
    var ref = $(this).data("ref");
    var destElement = $("div[data-dest=" +ref+ "]");
    $('html, body').animate({ scrollTop: destElement.offset().top }, 700);
  });

  $("#menu-ref").on("click", function() {
    $(this).toggleClass("menu-ref-on");
    $(".header__nav-menu").toggleClass("nav-menu-on");
  });

});
