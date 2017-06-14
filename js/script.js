$(document).ready(function(){
	/***************	slider text		***************/
	$('.slider').slider({
		full_width: true
	});
	/***************	side navbar		***************/
  	$('.button-collapse').sideNav();
  	/***************	change active class		***************/
  	if ($(window).width() < 582) {
  		$('.s_add').addClass("active_ctg");
  		$('.s_hide').removeClass("active_ctg");
  	};
  	/***************	companies touch slide		***************/
  	$("#companies").owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		autoPlay : true,
		stopOnHover : true
	});
  	/***************	slow scroll onclick		***************/
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	/***************	scroll effect show div		***************/
	eee = $("body.lf_website #eee").fadeTo(0, 0);
	$(window).scroll(function(d,h) {
	    eee.each(function(i) {
	        a = $(this).offset().top +200;
	        b = $(window).scrollTop() + $(window).height() + 100;
	        if (a < b) $(this).fadeTo(500,1);
	    });
	});
	/***************	investment post slide		***************/
	$("#inv_post").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		autoPlay : true,
		stopOnHover : true
	});
});
