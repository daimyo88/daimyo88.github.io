$(function(){
  $("li").on("click", function(e){
    var ref = $(this).data("ref");
    var destElement = $("div[data-dest=" +ref+ "]");
    $('html, body').animate({ scrollTop: destElement.offset().top }, 700);
  });
});
