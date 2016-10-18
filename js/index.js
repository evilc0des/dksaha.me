// JavaScript Document

var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    init(); // this is the function that gets called when everything is loaded
  }
}, 10);


function init()
{
	
}


$(document).ready(function(e) {
	
	var menuOut = false;
	
    $(".hamburger").click(function(e) {
		if(!menuOut)
		{
			$(this).css("animation", "hamburger 0.5s linear 0s 1");
			$(this).css("transform", "rotate(270deg)");
			$("#section-title").hide();
			$(".menu-list").css("display", "inline-block");
			$(".menu-list").removeClass("fadeOutLeft");
			$(".menu-list").addClass("animated fadeInLeft");
			$(this).css("animation", "")
			menuOut = true;
			
		}
		else
		{
			$(this).css("animation", "hamburger 0.5s linear 0s 1");
			$(this).css("transform", "rotate(0deg)");
			
			$(".menu-list").removeClass("fadeInLeft");
			$(".menu-list").addClass("animated fadeOutLeft");
			$('.menu-list').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
				$(".menu-list").hide();
				$("#section-title").show();
				$(this).css("animation", "");
			});
			menuOut = false;
		}
	});
	
	$(".contact-option").click(function(e) {
		$('.contact-info').hide();
        var id = $(this).attr("id");
		$(".contact-option").css("height","");
		$(this).css("height","100px");
		$('.contact-info').show("slow");
		if(id === "visit")
		{
		$('.contact-info').html('<span><b>Evilcodes Studio</b><br><br>C/O Debasish Saha,<br> Dimsagar, Agartala,<br> Tripura(w)</span>');
		}
		else if(id === "call")
		{
		$('.contact-info').html('<span><b>Mob:</b> +91-9774964682<br><br> Alt:+91381-2303508</span>');
		}
	else if(id === "mail")
	{
		$('.contact-info').html('<span><b>sahadhritikalpa@gmail.com</b><br><br>Or,<br>dhrtklpsh82@gmail.com<br>evilcodesinc@gmail.com</span>');
	}
    });
});