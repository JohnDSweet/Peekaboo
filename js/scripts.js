
$(document).ready(function() {
  $(".clickable").click(function(){
    $("#showing").fadeToggle();
    $("#not-showing").slideToggle();
  });

  $(".hoverable").hover(function() {
    $(".fadeable").fadeIn();
  });

  $(".click2").click(function() {
    $(".fade2").fadeIn();
  });

  $(".click3").click(function() {
    $(".fade3").fadeIn();
  });

  $(".click4").click(function() {
    $(".fade4").fadeIn();
  });

  $("#black").click(function() {
    $("body").addClass("blackBackground");
  });

  $("#white").click(function() {
    $("body").removeClass("blackBackground");
  });

  $("#highlight").click(function() {
    $("#highlight").addClass("highlight");
  });
});
