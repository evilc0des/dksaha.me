// JavaScript Document
$(document).ready(function(e) {
    
	var section = "home"; 
	var scrollUpGo = false;
	var scrollDownGo = false;
	var scrollDownDelay = 1000;
	var scrollUpDelay = 500;
	var waveWaypoint1 = $('.wave-scene').waypoint(function(direction) {
	  console.log(direction);
	  if(direction === "down")
	  {
		  	section="about"
		   $('#home-ind').removeClass('active');
		   $('#about-ind').addClass('active');
		   $('.menu-bar').css("color","white");
		   
		   $('#section-title').html("ABOUT");
		   $('#section-title').addClass("animated fadeInLeft");
		  
		   
		  
	  }
	  else if(direction === "up")
	  {
		  	section="home"
		   $('#home-ind').addClass('active');
		   $('#about-ind').removeClass('active');
		   $('.menu-bar').css("color","black");
		  
		   $('#section-title').html("HOME");
		   $('#section-title').addClass("animated fadeInLeft");
	  }
  
},{
	offset: '20%'
});

/*var waveWaypoint3 = $('.evilcodes-logo').waypoint(function(direction) {
	  console.log(direction);
	  if(direction === "down")
	  {
		  	window.onscroll = function(e){
			$('.about-div').removeClass("animated fadeInLeft");
		   $('.about-div').addClass("animated fadeOutLeft");
		   
			}
	   
		  
	  }
	  else if(direction === "up")
	  {
		  window.onscroll = function(e){
			$('.about-div').removeClass("animated fadeOutLeft");
		   $('.about-div').addClass("animated fadeInLeft");
		   
			}
		 
	  }
  
},{
	offset: '71%'
});
*/
var waveWaypoint2 = $('.wave-scene').waypoint(function(direction) {
	  console.log(direction);
	  if(direction === "down")
	  {
		  	
		   $('.skills-img').addClass("animated bounceInDown");
		   $('.dk-logo').attr("src","assets/dklogoinv.png");
		   $('.dk-logo').addClass("animated fadeIn");
	   
		  
	  }
	  else if(direction === "up")
	  {
		  $('.skills-img').addClass("animated bounceOutDown");
		   $('.dk-logo').attr("src","assets/dklogo.png");
		   $('.dk-logo').addClass("animated fadeIn");
		 
	  }
  
},{
	offset: '50%'
});




window.onscroll = function(ev) {
    
		
        $(window).mousewheel(function(e){
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight+20) {
			
			if(scrollDownGo && (section==="about")&&(e.deltaY === -1))
			{
				section = "portfolio";
				$('#portfolio-ind').addClass('active');
		   $('#about-ind').removeClass('active');
			$('.about-div').removeClass("animated fadeInLeft");
		   $('.about-div').addClass("animated fadeOutLeft");
		    $('.portfolio-div').removeClass("animated fadeOutLeft");
		   $('.about-div').hide();
		   $('.portfolio-div').show();
		   $('.portfolio-div').addClass("animated fadeInLeft");	
		   $('.my-pic').addClass("animated fadeOutRight");
		    $('#section-title').html("PORTFOLIO");
		   $('#section-title').addClass("animated fadeInLeft");
		  
		   scrollDownGo = false;
			}
			setTimeout(function(){ scrollDownGo = true;},scrollDownDelay);
		   setTimeout(function(){ scrollUpGo = true;},scrollUpDelay);
		   
		   if(scrollUpGo && (section==="portfolio")&&(e.deltaY === 1))
			{
				e.preventDefault();
				section = "about";
				$('.about-div').show();
		   $('.portfolio-div').hide();
		   $('.portfolio-div').removeClass("animated fadeInLeft");
		   $('.portfolio-div').addClass("animated fadeOutLeft");	
				$('#about-ind').addClass('active');
		   $('#portfolio-ind').removeClass('active');
			$('.about-div').removeClass("animated fadeOutLeft");
		   $('.about-div').addClass("animated fadeInLeft");
		   $('.my-pic').removeClass("animated fadeOutRight");
		   $('.my-pic').addClass("animated fadeInRight");
		    $('#section-title').html("ABOUT");
		   $('#section-title').addClass("animated fadeInLeft");
		   
		   scrollUpGo = false;
			}
			
			if(scrollDownGo && (section==="portfolio")&&(e.deltaY === -1))
			{
				
				section = "contact";
				$('.contact-div').show();
		   
		   
				$('#contact-ind').addClass('active');
		   $('#portfolio-ind').removeClass('active');
			$('.contact-div').removeClass("animated fadeOutLeft");
		   $('.contact-div').addClass("animated fadeInLeft");
		   $('.sea-grad').show();
		   $('.sea-bed').show();
		    $('#section-title').html("CONTACT");
		   $('#section-title').addClass("animated fadeInLeft");
		   
		   scrollDownGo = false;
			}
			
			if(scrollUpGo && (section==="contact")&&(e.deltaY === 1))
			{
				e.preventDefault();
				$('.scroll-reset').ScrollTo(
				{
					duration: 1000,
					callback: function(){
						$('.sea-grad').hide();
						$('.sea-bed').hide();
					}
					});
				section = "portfolio";
				
		   $('.contact-div').hide();
				$('#portfolio-ind').addClass('active');
		   $('#contact-ind').removeClass('active');
			$('.portfolio-div').removeClass("animated fadeOutLeft");
		   $('.portfolio-div').addClass("animated fadeInLeft");
		   
		    $('#section-title').html("PORTFOLIO");
		   $('#section-title').addClass("animated fadeInLeft");
		   
		   scrollUpGo = false;
			}
		   }
			});
    
};
 $('#section-title').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
	 $('#section-title').removeClass("animated fadeInLeft");
 });

$('.dk-logo').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
	 $('.dk-logo').removeClass("animated fadeIn");
 });
 
 $('.skills-img').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
	 $('.skills-img').removeClass("animated bounceOutDown");
	 $('.skills-img').removeClass("animated bounceInDown");
 });
});



