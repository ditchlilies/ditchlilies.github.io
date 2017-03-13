$(document).ready(function(){
    
$("#scroll-about").click(function(){
      console.log($("#about"));
      $('html, body').animate({
        scrollTop: $("#about").offset().top
        }, 1000);
})
   

$("#scroll-project").click(function(){
      console.log($("#projects"));
      $('html, body').animate({
        scrollTop: $("#projects").offset().top
        }, 1000);
})
})

