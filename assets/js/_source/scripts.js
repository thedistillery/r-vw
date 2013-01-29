
$(window).load(function() 
{
	// slideshow - pick one
	var bgs = new Array("02.jpg", "03.jpg", "04.jpg");
	var bg = bgs[Math.floor(Math.random()*bgs.length)];
	$("body").backstretch(["images/background/"+bg]);
});

$(document).ready(function() 
{	
	// ga tracking
	$.ga.load("UA-37384503-1");
});




$(function() {
	$('a[href^="mailto:"]').each(function() {
		this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
		// Remove this line if you don't want to set the email address as link text:
		this.innerHTML = this.href.replace('mailto:', '');
	});
});
