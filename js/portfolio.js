// JavaScript Document

$(document).ready(function(e) {
	var projectData;
	
	$.getJSON( "data/projects.json", function( data ) {
			
		projectData = data;
    	});
		
    $('.gallery-img').click(function(e) {
        var name = $(this).attr("id");
		var url = "assets/portfolio/"+name+"/";
		var project;
			$.each(projectData, function(index, object)
			{
				if(object.id === name)
				{
					project = object;
					
				}
			});
		$('.item').removeClass("active");
		$('.first-slide').addClass("active");
		$('#preview-caraousel').find('.preview-img1').attr("src", url+"0.jpg");
		$('#preview-caraousel').find('.preview-img2').attr("src", url+"1.jpg");
		$('#preview-caraousel').find('.preview-img3').attr("src", url+"2.jpg");
		
		$('#project-name').html(project.name);
		$('#project-date').html(project.date);
		$('#project-desc').html(project.description);
		$('#project-link').html(project.linkName);
		$('#project-link').attr("href", project.url);
		
		var tagData="";
		var tagCount = project.tags.length;
		$.each(project.tags, function(index, object)
			{
				tagData+='<span class="label label-warning">'+object.name+'</span> ';
			});
		$('#tags').html(tagData);
		$('.tag-count').html(tagCount);
  });
});