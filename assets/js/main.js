var buttonMenu = document.getElementById("toggle-menu");
var sideMenu =  document.getElementById("primary-menu");

buttonMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (buttonMenu.classList.contains("active")) {
		buttonMenu.classList.remove("active");
		sideMenu.classList.remove("active");
	}else{
		buttonMenu.classList.add("active");
		sideMenu.classList.add("active");
	}
}


$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".satuNav").addClass("satu");
  } else {
      $(".satuNav").removeClass("satu")    
  }
});