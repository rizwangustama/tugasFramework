$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".satuNav").addClass("satu");
  } else {
      $(".satuNav").removeClass("satu")    
  }
});