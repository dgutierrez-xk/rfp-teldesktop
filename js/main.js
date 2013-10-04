$(document).ready(function(){
	$("#principal-slide").owlCarousel({
		autoPlay   : true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
 	});

 	$("#cel-slide").owlCarousel({
		autoPlay   : true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400
 	});

 	$("#apps-slide").owlCarousel({
		autoPlay   : true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400
 	});

 	$("#planes-slide").owlCarousel({
		autoPlay   : true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
 	});

 	$("#accesorios-slide").owlCarousel({
		autoPlay   : true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
 	});

 	$('.cbp-hrmenu nav ul li').hover(function(){
 		$('.cbp-hrmenu nav ul li a').removeClass('hover');
 		$('a',this).addClass('hover');
 		$('.content-nav').addClass('expand')
 	});

 	$('.cabezote .header-color + .w960 > .row').mouseleave(function(){
 		$('.cbp-hrmenu nav ul li a').removeClass('hover');
 		$('.content-nav').removeClass('expand')
 	})

 	$('#menu-container').easytabs({
 		tabs: "#menu-tabs li",
 		tabActiveClass: "none"
 	});
});