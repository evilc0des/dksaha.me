// JavaScript Document

$(document).ready(function(e) {
	var loaderTexts = ["Just getting ready", "Cleaning Stuffs Up", "Any Minute Now", "Wait for it..", "Here"];
	var i = 0;
	$('body').addClass("stop-scrolling");
	var everythingLoaded=setInterval(function(){
		$('.loader-text').html(loaderTexts[i]);
		if(i<3)
		{
		 	i++;
		}
		else
		{
			i=0;
		}
		
		if (/loaded|complete/.test(document.readyState)) {
    	clearInterval(everythingLoaded);
		$('body').addClass("stop-scrolling");
    	init(); // this is the function that gets called when everything is loaded
  		}
		 }, 5000);
		 
		 function init(){
			 $('.everything').css("visibility","visible");
			 $('.loader-wrapper').addClass("animated fadeOut");
			 $('body').removeClass("stop-scrolling");
		 }
});