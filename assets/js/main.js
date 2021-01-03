$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".satuNav").addClass("satu");
  } else {
      $(".satuNav").removeClass("satu")    
  }
});

$(function() {
  $(".preload").fadeOut(2000, function() {
    $(".satuNav").fadeIn(1000);
  });
});